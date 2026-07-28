<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/../vendor/phpmailer/phpmailer/src/Exception.php';
require __DIR__ . '/../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ . '/../vendor/phpmailer/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function respond(bool $ok, string $message): void
{
    http_response_code($ok ? 200 : 400);
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

function getClientIp(): string
{
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $forwarded = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($forwarded[0]);
    }

    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function verifyTurnstile(string $token, string $secretKey, string $remoteIp): bool
{
    $postFields = [
        'secret' => $secretKey,
        'response' => $token,
        'remoteip' => $remoteIp,
    ];

    if (function_exists('curl_init')) {
        $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => http_build_query($postFields),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_TIMEOUT => 10,
        ]);

        $result = curl_exec($ch);

        if ($result === false) {
            error_log('Turnstile: fallo en la petición a Cloudflare (cURL) — ' . curl_error($ch));
        }

        curl_close($ch);
    } else {
        $options = [
            'http' => [
                'method' => 'POST',
                'header' => 'Content-Type: application/x-www-form-urlencoded',
                'content' => http_build_query($postFields),
                'timeout' => 10,
            ],
        ];

        $result = @file_get_contents(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            false,
            stream_context_create($options)
        );

        if ($result === false) {
            $error = error_get_last();
            error_log('Turnstile: fallo en la petición a Cloudflare (file_get_contents) — ' . ($error['message'] ?? 'motivo desconocido'));
        }
    }

    if ($result === false) {
        return false;
    }

    $response = json_decode($result, true);

    if (!($response['success'] ?? false)) {
        error_log('Turnstile: verificación rechazada — ' . json_encode($response['error-codes'] ?? []));
        return false;
    }

    return true;
}

function isRateLimited(string $ip): bool
{
    $file = __DIR__ . '/.ratelimit.php';
    $window = 600; // 10 minutos
    $maxRequests = 5;
    $now = time();

    $data = is_file($file) ? (require $file) : [];
    if (!is_array($data)) {
        $data = [];
    }

    foreach ($data as $storedIp => $timestamps) {
        $data[$storedIp] = array_values(array_filter($timestamps, fn($t) => $t > $now - $window));
        if ($data[$storedIp] === []) {
            unset($data[$storedIp]);
        }
    }

    $recent = $data[$ip] ?? [];
    if (count($recent) >= $maxRequests) {
        return true;
    }

    $recent[] = $now;
    $data[$ip] = $recent;

    file_put_contents($file, '<?php return ' . var_export($data, true) . ';');

    return false;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Método no permitido.');
}

if (isRateLimited(getClientIp())) {
    respond(false, 'Demasiadas solicitudes. Inténtelo de nuevo en unos minutos.');
}

$configFile = __DIR__ . '/config.php';
$smtpConfig = is_file($configFile) ? require $configFile : null;

if ($smtpConfig !== null && !empty($smtpConfig['turnstile_secret_key'])) {
    $turnstileToken = (string) ($_POST['cf-turnstile-response'] ?? '');

    if ($turnstileToken === '' || !verifyTurnstile($turnstileToken, $smtpConfig['turnstile_secret_key'], getClientIp())) {
        respond(false, 'No se ha podido verificar que no es un robot. Vuelva a intentarlo.');
    }
}

$nombre = trim((string) ($_POST['nombre'] ?? ''));
$telefono = trim((string) ($_POST['telefono'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$servicio = trim((string) ($_POST['servicio'] ?? ''));
$mensaje = trim((string) ($_POST['mensaje'] ?? ''));

if ($nombre === '' || $telefono === '' || $email === '' || $mensaje === '') {
    respond(false, 'Faltan campos obligatorios.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'El correo electrónico no es válido.');
}

$maxLengths = [
    'nombre' => 100,
    'telefono' => 20,
    'email' => 150,
    'servicio' => 100,
    'mensaje' => 5000,
];
$campos = compact('nombre', 'telefono', 'email', 'servicio', 'mensaje');

foreach ($maxLengths as $campo => $max) {
    if (mb_strlen($campos[$campo]) > $max) {
        respond(false, 'Uno de los campos supera la longitud máxima permitida.');
    }
}

$destinatario = 'nagatowork3@gmail.com';

$mail = new PHPMailer(true);

try {
    if ($smtpConfig !== null) {
        $mail->isSMTP();
        $mail->Host = $smtpConfig['smtp_host'];
        $mail->Port = $smtpConfig['smtp_port'];
        $mail->SMTPAuth = true;
        $mail->Username = $smtpConfig['smtp_username'];
        $mail->Password = $smtpConfig['smtp_password'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->isMail();
    }
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->setFrom($smtpConfig['smtp_from_email'] ?? $destinatario, 'Web Talleres Coda');
    $mail->addAddress($destinatario);
    $mail->addReplyTo($email, $nombre);

    $mail->Subject = 'Nueva solicitud de contacto — Talleres Coda';

    $mail->isHTML(true);
    $mail->Body = sprintf(
        '<p><strong>Nombre:</strong> %1$s</p>'
            . '<p><strong>Teléfono:</strong> %2$s</p>'
            . '<p><strong>Correo:</strong> %3$s</p>'
            . '<p><strong>Servicio de interés:</strong> %4$s</p>'
            . '<p><strong>Mensaje:</strong><br>%5$s</p>',
        htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8'),
        htmlspecialchars($telefono, ENT_QUOTES, 'UTF-8'),
        htmlspecialchars($email, ENT_QUOTES, 'UTF-8'),
        htmlspecialchars($servicio, ENT_QUOTES, 'UTF-8'),
        nl2br(htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8'))
    );
    $mail->AltBody = "Nombre: {$nombre}\nTeléfono: {$telefono}\nCorreo: {$email}\nServicio de interés: {$servicio}\nMensaje:\n{$mensaje}";

    $mail->send();

    respond(true, 'Solicitud enviada correctamente.');
} catch (Exception $e) {
    error_log('Error al enviar correo de contacto: ' . $e->getMessage());
    respond(false, 'No se ha podido enviar la solicitud. Inténtelo de nuevo más tarde.');
}
