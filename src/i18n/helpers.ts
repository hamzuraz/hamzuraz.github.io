import type { GetStaticPaths } from "astro";
import { langCodeDefault, langCodeSegments, langCodes, ui } from "./config";
import type { DictionaryKey, LangCode, TranslationFunc } from "./types";

export type {
	Dictionary,
	DictionaryKey,
	LangCode,
	TranslationFunc,
} from "./types";

export function isLangCode(value: string): value is LangCode {
	return Object.hasOwn(ui, value);
}

export const getLocalizedRouteStaticPaths = (() => {
	return langCodes.map((langCode) => {
		return {
			params: {
				lang: langCodeSegments[langCode],
			},
		};
	});
}) satisfies GetStaticPaths;

export function getLangCodeFromPathname(pathname: string): LangCode {
	const firstSegment = pathname.split("/")[1];
	return isLangCode(firstSegment) ? firstSegment : langCodeDefault;
}

export function useTranslations(langCode: LangCode): TranslationFunc {
	return function t(key: DictionaryKey): string {
		return ui[langCode][key];
	};
}

export function buildLocalizedRoutePath(
	langCode: string,
	pathname: string,
): string {
	if (!isLangCode(langCode)) return pathname;

	const langCodeSegment = langCodeSegments[langCode];
	const segments = pathname.split("/").filter(Boolean);

	const hasTrailingSlash = pathname.endsWith("/");
	const hasLangCodeSegment = Object.keys(langCodeSegments).some(
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
