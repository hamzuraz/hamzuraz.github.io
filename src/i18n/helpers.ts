import type { GetStaticPaths } from "astro";

import { langCodeDefault, langCodeSegments, langCodes, ui } from "./i18n";

// TYPES =======================================================================
export type LangCode = keyof typeof ui;

export type Dictionary = {
	key: keyof (typeof ui)[LangCode];
};

// TYPE GUARDS =================================================================
export type TranslationFunc = (key: Dictionary["key"]) => string;

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export function isLangCode(value: string): value is LangCode {
	return Object.hasOwn(ui, value);
}

// CORE FUNCTIONS ==============================================================
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
