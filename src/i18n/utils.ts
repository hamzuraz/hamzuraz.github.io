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
	return Object.hasOwn(ui, value);
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
	const segment = pathname.split("/")[1];
	const langCode = getObjectKeys(langCodeUrlPrefixes).find(
		(code) => code === segment || langCodeUrlPrefixes[code] === segment,
	);

	if (langCode) return langCode;
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
	const hasTrailingSlash = pathname.endsWith("/");
	const hasLangPrefixSegment = getObjectKeys(langCodeUrlPrefixes).some(
		(code) =>
			code === segments[0] ||
			(Boolean(langCodeUrlPrefixes[code]) &&
				langCodeUrlPrefixes[code] === segments[0]),
	);

	if (hasLangPrefixSegment) segments.shift();

	const localizedPath = targetUrlPrefix
		? `/${targetUrlPrefix}/${segments.join("/")}`
		: `/${segments.join("/")}`;

	if (hasTrailingSlash && !localizedPath.endsWith("/")) {
		return `${localizedPath}/`;
	}

	return localizedPath;
}
