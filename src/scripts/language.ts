// THIS SCRIPT IS OPTIONAL.
// Basecoat Select component handles option selection but does not navigate
// links when using Arrow keys followed by Enter. Tab followed by Enter works
// natively on the rendered anchor links without this script.
const selector = document.querySelector<HTMLDivElement>("#language-selector");

if (selector) {
	selector.addEventListener("change", (event) => {
		if (!(event instanceof CustomEvent)) return;

		const value = event.detail.value;
		if (typeof value !== "string") return;

		const link = selector.querySelector<HTMLAnchorElement>(
			`a[data-value="${value}"]`,
		);

		link?.click();
	});
}
