import { isLangCode } from "../theme-selector/theme-selector-helpers";
import { buildLocalizedRoutePath, languages } from "./not-found-helpers";

const langNameActiveTextElements =
	window.document.querySelectorAll<HTMLSpanElement>("#lang-name-active-text");
const langCodeActiveTextElements =
	window.document.querySelectorAll<HTMLSpanElement>("#lang-code-active-text");
const langMenuElements =
	window.document.querySelectorAll<HTMLUListElement>("#lang-menu");

const firstSegment = window.location.pathname.split("/")[1];
console.log(firstSegment);

if (isLangCode(firstSegment)) {
	langNameActiveTextElements.forEach((element) => {
		element.textContent = languages[firstSegment];
	});

	langCodeActiveTextElements.forEach((element) => {
		element.textContent = firstSegment;
	});
}

langMenuElements.forEach((langMenuElement) => {
	langMenuElement.addEventListener("click", (event) => {
		const element = event.target;
		if (!(element instanceof Element)) return;

		const langCodeValueElement = element.closest<HTMLAnchorElement>(
			"a[data-lang-code-value]",
		);
		if (!langCodeValueElement) return;

		event.preventDefault();

		const langCode = langCodeValueElement.dataset.langCodeValue;
		if (!langCode || !isLangCode(langCode)) return;

		const newPath = buildLocalizedRoutePath(langCode, window.location.pathname);
		window.location.pathname = newPath;
	});
});
