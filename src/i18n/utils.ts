import type { GetStaticPaths } from "astro";
import {
	type Dictionary,
	defaultLangCode,
	type LangCode,
	langCodeUrlPrefixes,
	languages,
	ui,
} from "./ui.ts";

function isLangCode(value: string): value is LangCode {
	return value in ui;
}

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export const getLangCodeStaticPaths = (() => {
	const langCodes = getObjectKeys(languages);

	return langCodes.map((lang) => {
		const langCodeUrlPrefix = langCodeUrlPrefixes[lang];
		return {
			params: {
				lang: langCodeUrlPrefix,
			},
		};
	});
}) satisfies GetStaticPaths;

export function getLangCodeFromPathname(pathname: string) {
	const langCode = pathname.split("/")[1];
	if (isLangCode(langCode)) return langCode;
	return defaultLangCode;
}

export function useTranslations(langCode: LangCode) {
	return function t(key: Dictionary["key"]) {
		return ui[langCode][key];
	};
}

export function buildLocalizedPath(langCode: string, pathname: string): string {
	if (!isLangCode(langCode)) return pathname;

	const targetUrlPrefix = langCodeUrlPrefixes[langCode];
	const segments = pathname.split("/").filter(Boolean);
	const nonEmptyLangUrlPrefixes =
		Object.values(langCodeUrlPrefixes).filter(Boolean);
	const hasLangPrefixSegment = nonEmptyLangUrlPrefixes.includes(segments[0]);

	if (hasLangPrefixSegment) segments.shift();

	return targetUrlPrefix
		? `/${targetUrlPrefix}/${segments.join("/")}`
		: `/${segments.join("/")}`;
}
