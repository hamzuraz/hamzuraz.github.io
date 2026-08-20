import { buildLocalizedPath, getLangFromPathname } from "$/i18n/utils.ts";

const languageSelector = document.getElementById("language-selector");

if (languageSelector instanceof HTMLSelectElement) {
	languageSelector.value = getLangFromPathname(window.location.pathname);

	languageSelector.addEventListener("change", (event: Event) => {
		const element = event.target;

		if (element instanceof HTMLSelectElement) {
			const newPath = buildLocalizedPath(
				window.location.pathname,
				element.value,
			);
			window.location.href = newPath;
		}
	});
}
