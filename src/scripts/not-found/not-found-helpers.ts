import {
	isLangCode,
	type LangCode,
} from "../theme-selector/theme-selector-helpers";

type LangCodeRecord = Record<LangCode, string>;

export const languages: LangCodeRecord = {
	"en-US": "English",
	id: "Bahasa Indonesia",
	ja: "日本語",
};

export const langCodeSegments: LangCodeRecord = {
	"en-US": "",
	id: "id",
	ja: "ja",
};

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export function buildLocalizedRoutePath(
	langCode: string,
	pathname: string,
): string {
	if (!isLangCode(langCode)) return pathname;

	const langCodeSegment = langCodeSegments[langCode];
	const segments = pathname.split("/").filter(Boolean);

	const hasTrailingSlash = pathname.endsWith("/");
	const hasLangCodeSegment = getObjectKeys(langCodeSegments).some(
		(code) => code === segments[0],
	);

	if (hasLangCodeSegment) segments.shift();

	const localizedRoutePath = langCodeSegment
		? `/${langCodeSegment}/${segments.join("/")}`
		: `/${segments.join("/")}`;

	if (hasTrailingSlash && !localizedRoutePath.endsWith("/")) {
		return `${localizedRoutePath}/`;
	}

	return localizedRoutePath;
}
