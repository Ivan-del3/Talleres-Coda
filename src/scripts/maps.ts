export function loadMapsIframe(frame: HTMLElement, src: string): void {
	const iframe = document.createElement('iframe');
	iframe.src = src;
	iframe.width = '100%';
	iframe.height = '100%';
	iframe.style.border = '0';
	iframe.style.minHeight = '260px';
	iframe.loading = 'lazy';
	iframe.referrerPolicy = 'no-referrer-when-downgrade';
	iframe.title = 'Ubicación de Talleres C.O.D.A en el mapa';
	iframe.allowFullscreen = true;

	frame.replaceChildren(iframe);
}
