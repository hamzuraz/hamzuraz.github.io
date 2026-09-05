import type { GetStaticPaths } from "astro";
import {
	type Dictionary,
	getObjectKeys,
	isLangCode,
	type LangCode,
	type TranslationFunc,
} from "./type-helpers";
import { langCodeDefault, langCodeSegments, languages, ui } from "./ui";

export const getLocalizedRouteStaticPaths = (() => {
	const langCodes = getObjectKeys(languages);
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
	return function t(key: Dictionary["key"]): string {
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
