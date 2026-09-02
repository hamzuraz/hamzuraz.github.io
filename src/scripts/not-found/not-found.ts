import { isLangCode } from "../theme-selector/type-helpers";
import { buildLocalizedRoutePath, languages } from "./utils";

const langNameActiveTextElement = window.document.getElementById(
	"lang-name-active-text",
);
const langCodeActiveTextElement = window.document.getElementById(
	"lang-code-active-text",
);
const langMenuElement = window.document.getElementById("lang-menu");

if (
	langNameActiveTextElement instanceof HTMLSpanElement &&
	langCodeActiveTextElement instanceof HTMLSpanElement
) {
	const firstSegment = window.location.pathname.split("/")[1];
	if (isLangCode(firstSegment)) {
		langNameActiveTextElement.textContent = languages[firstSegment];
		langCodeActiveTextElement.textContent = firstSegment;
	}
}

if (langMenuElement instanceof HTMLUListElement) {
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
}
