import inyeccionGasolina from "../assets/servicios/inyeccion-gasolina.png";
import inyeccionDiesel from "../assets/servicios/inyeccion-diesel.png";
import electricidadElectronica from "../assets/servicios/electricidad-electronica.png";
import encendido from "../assets/servicios/encendido.png";
import frenosAbsEsp from "../assets/servicios/frenos-abs-esp.png";
import mantenimiento from "../assets/servicios/mantenimiento.png";
import mecanicaMotor from "../assets/servicios/mecanica-motor.png";
import refrigeracion from "../assets/servicios/refrigeracion.png";
import neumaticosAlineacion from "../assets/servicios/neumaticos-alineacion.png";
import aireAcondicionado from "../assets/servicios/aire-acondicionado.png";
import hibridos from "../assets/servicios/hibridos.png";
import preItv from "../assets/servicios/pre-itv.png";

export type Service = {
	icon: string;
	title: string;
	desc: string;
	longDesc: string;
	image: ImageMetadata;
};

export const services: Service[] = [
	{
		icon: `<rect x="5" y="5" width="10" height="15" rx="1"/><path d="M9 5V3h4v2"/><path d="M15 9h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 1-3 0"/><path d="M8 12h4"/>`,
		title: "Inyección de Gasolina",
		desc: "Puesta a punto y reparación de sistemas de inyección de gasolina.",
		longDesc: [
			"El sistema de inyección de gasolina es el encargado de suministrar la cantidad exacta de combustible que necesita el motor en cada momento. Para ello trabaja junto con la centralita electrónica (ECU), sensores e inyectores, consiguiendo una combustión eficiente, un menor consumo y un funcionamiento suave del vehículo.",
			"Cuando alguno de estos componentes falla pueden aparecer problemas como pérdida de potencia, tirones al acelerar, dificultad para arrancar, aumento del consumo o el encendido del testigo de avería del motor. Un diagnóstico profesional permite localizar rápidamente el origen del problema y evitar averías mayores.",
			"En nuestro taller realizamos comprobaciones completas del sistema de inyección, revisando inyectores, sensores, presión de combustible y componentes electrónicos para devolver al motor su rendimiento original.",
		].join("\n\n"),
		image: inyeccionGasolina,
	},
	{
		icon: `<path d="M12 2s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11z"/>`,
		title: "Inyección Diesel",
		desc: "Diagnóstico y reparación de inyección diésel de alta presión.",
		longDesc: [
			"Los motores diésel utilizan sistemas de inyección de alta presión capaces de introducir el combustible en la cámara de combustión con una precisión extremadamente elevada. Este sistema permite obtener un gran rendimiento, un consumo reducido y menores emisiones contaminantes.",
			"Con el paso del tiempo pueden aparecer averías en los inyectores, la bomba de alta presión o el sistema Common Rail, provocando humos excesivos, pérdida de potencia, dificultades de arranque o un funcionamiento irregular del motor.",
			"Disponemos del equipo de diagnosis necesario para comprobar presiones, caudales e inyectores, detectando cualquier anomalía y realizando la reparación adecuada para recuperar la eficiencia y fiabilidad del vehículo.",
		].join("\n\n"),
		image: inyeccionDiesel,
	},
	{
		icon: `<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>`,
		title: "Electricidad y Electrónica",
		desc: "Diagnóstico y reparación de electricidad y electrónica del automóvil.",
		longDesc: [
			"Los vehículos actuales incorporan decenas de sistemas electrónicos que controlan prácticamente todas sus funciones, desde el motor y el ABS hasta el climatizador, la iluminación o los sistemas de seguridad.",
			"Cuando aparece un fallo eléctrico es habitual que se enciendan testigos en el cuadro, dejen de funcionar determinados componentes o se produzcan averías intermitentes difíciles de localizar.",
			"Mediante equipos de diagnosis y herramientas especializadas comprobamos sensores, cableado, fusibles, centralitas y sistemas electrónicos para identificar el origen del problema y repararlo con total garantía.",
		].join("\n\n"),
		image: electricidadElectronica,
	},
	{
		icon: `<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M2 12h4M18 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8"/>`,
		title: "Encendido",
		desc: "Revisión y sustitución de bujías, bobinas y sistemas de encendido.",
		longDesc: [
			"El sistema de encendido genera la chispa que permite inflamar la mezcla de aire y combustible en los motores de gasolina. Está formado por elementos como las bujías, bobinas de encendido y diferentes sensores que trabajan coordinadamente con la centralita del vehículo.",
			"Cuando alguno de estos componentes falla pueden producirse tirones, ralentí inestable, pérdida de potencia, aumento del consumo o dificultades para arrancar.",
			"Revisamos todos los elementos del sistema de encendido, sustituyendo únicamente las piezas necesarias para recuperar un funcionamiento eficiente y prolongar la vida útil del motor.",
		].join("\n\n"),
		image: encendido,
	},
	{
		icon: `<circle cx="12" cy="12" r="9"/><path d="M7 6c-2 2-3 4-3 6s1 4 3 6"/><path d="M17 6c2 2 3 4 3 6s-1 4-3 6"/><path d="M12 8v5"/><circle cx="12" cy="16" r="0.6" fill="#395B7A" stroke="none"/>`,
		title: "Frenos, ABS, ESP",
		desc: "Revisión y sustitución de frenos, ABS y sistemas de estabilidad ESP.",
		longDesc: [
			"El sistema de frenos es uno de los elementos más importantes para la seguridad del vehículo. Además de discos, pastillas y líquido de frenos, los vehículos modernos incorporan sistemas electrónicos como el ABS y el ESP, que ayudan a mantener el control durante frenadas de emergencia o situaciones de baja adherencia.",
			"Un desgaste excesivo, vibraciones, ruidos o el encendido de los testigos pueden indicar la necesidad de una revisión.",
			"Comprobamos el estado de todos los componentes del sistema de frenado, medimos el desgaste, verificamos el funcionamiento del ABS y ESP y realizamos las reparaciones necesarias para garantizar una frenada segura y eficaz.",
		].join("\n\n"),
		image: frenosAbsEsp,
	},
	{
		icon: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
		title: "Mecánica de Mantenimiento",
		desc: "Cambios de aceite, filtros y revisiones periódicas de mantenimiento.",
		longDesc: [
			"El mantenimiento periódico es la mejor forma de prevenir averías costosas y alargar la vida útil del vehículo. Cambiar el aceite, los filtros y revisar los principales componentes permite mantener el motor en perfecto estado y conservar sus prestaciones.",
			"Seguir los intervalos recomendados por el fabricante ayuda a reducir el desgaste, mejorar el consumo y evitar problemas mecánicos inesperados.",
			"Realizamos revisiones completas adaptadas a cada vehículo, utilizando lubricantes y recambios de calidad para asegurar un funcionamiento fiable durante muchos kilómetros.",
		].join("\n\n"),
		image: mantenimiento,
	},
	{
		icon: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
		title: "Mecánica de Motor",
		desc: "Reparación de motor, embrague y transmisión con recambios de calidad.",
		longDesc: [
			"El motor es el corazón del vehículo y requiere un diagnóstico preciso cuando aparece cualquier anomalía. Ruidos extraños, pérdida de potencia, consumo elevado de aceite o humo por el escape son síntomas que no deben ignorarse.",
			"Nuestro equipo realiza desde pequeñas reparaciones hasta reconstrucciones completas del motor, revisando distribución, culata, juntas, turbo, sistema de lubricación y todos los componentes necesarios.",
			"Trabajamos con herramientas específicas y recambios de calidad para garantizar una reparación duradera y el máximo rendimiento del motor.",
		].join("\n\n"),
		image: mecanicaMotor,
	},
	{
		icon: `<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M8 4v16M12 4v16M16 4v16"/>`,
		title: "Sistemas de Refrigeración",
		desc: "Revisión y reparación del circuito de refrigeración del motor.",
		longDesc: [
			"El sistema de refrigeración mantiene el motor a su temperatura de funcionamiento adecuada, evitando el sobrecalentamiento y protegiendo sus componentes internos frente al desgaste.",
			"Está compuesto por elementos como el radiador, la bomba de agua, el termostato, el electroventilador y el líquido refrigerante, todos ellos imprescindibles para evacuar el calor generado durante la combustión.",
			"Si el vehículo pierde refrigerante, aumenta su temperatura o aparece el testigo de sobrecalentamiento, es importante revisar el sistema cuanto antes para evitar daños graves en el motor.",
		].join("\n\n"),
		image: refrigeracion,
	},
	{
		icon: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/>`,
		title: "Neumáticos y Alineación",
		desc: "Montaje, equilibrado y alineación de dirección.",
		longDesc: [
			"Los neumáticos son el único punto de contacto entre el vehículo y la carretera, por lo que su estado influye directamente en la seguridad, el confort y el consumo de combustible.",
			"Una alineación incorrecta puede provocar desgaste irregular, vibraciones, desviaciones en la dirección y una menor estabilidad durante la conducción.",
			"Realizamos el montaje, equilibrado y alineación mediante equipos de precisión para garantizar un desgaste uniforme de los neumáticos y una conducción más segura y confortable.",
		].join("\n\n"),
		image: neumaticosAlineacion,
	},
	{
		icon: `<path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11"/><circle cx="12" cy="12" r="1.6" fill="#395B7A" stroke="none"/>`,
		title: "Aire Acondicionado",
		desc: "Carga de gas y reparación de aire acondicionado.",
		longDesc: [
			"El sistema de aire acondicionado no solo proporciona confort durante los meses de calor, sino que también ayuda a desempañar los cristales y mejora la calidad del aire del habitáculo.",
			"Con el tiempo puede perder gas refrigerante, acumular humedad, bacterias o sufrir averías en componentes como el compresor, el condensador o el evaporador.",
			"Realizamos revisiones completas del sistema, comprobando presiones, detectando fugas, sustituyendo filtros y efectuando la carga del gas refrigerante según las especificaciones del fabricante.",
		].join("\n\n"),
		image: aireAcondicionado,
	},
	{
		icon: `<path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/><path d="M12 17v5"/>`,
		title: "Vehículos Híbridos",
		desc: "Mantenimiento y diagnóstico especializado de vehículos híbridos.",
		longDesc: [
			"Los vehículos híbridos combinan un motor de combustión con uno o varios motores eléctricos para reducir el consumo de combustible y las emisiones contaminantes.",
			"Su mantenimiento requiere conocimientos específicos y herramientas adaptadas a los sistemas de alta tensión, así como procedimientos de seguridad diferentes a los de un vehículo convencional.",
			"Nuestro taller dispone de la formación y el equipamiento necesarios para realizar diagnósticos, revisiones y reparaciones de vehículos híbridos con todas las garantías del fabricante.",
		].join("\n\n"),
		image: hibridos,
	},
	{
		icon: `<rect x="4" y="4" width="16" height="18" rx="1.5"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M8.5 13.5l2 2 4.5-4.5"/>`,
		title: "Pre-ITV",
		desc: "Revisión previa a la Inspección Técnica de Vehículos.",
		longDesc: [
			"La revisión Pre-ITV permite comprobar previamente los mismos elementos que serán inspeccionados durante la Inspección Técnica de Vehículos, reduciendo el riesgo de obtener un resultado desfavorable.",
			"Durante la revisión verificamos frenos, suspensión, alumbrado, neumáticos, emisiones, dirección, niveles y otros componentes esenciales para detectar cualquier defecto antes de acudir a la ITV.",
			"Realizar una Pre-ITV supone ahorrar tiempo, evitar segundas inspecciones y acudir a la estación con la tranquilidad de que el vehículo cumple las condiciones necesarias para superar la inspección con éxito.",
		].join("\n\n"),
		image: preItv,
	},
];
