import type { GetStaticPaths } from "astro";
import { defaultLang, languagePrefixes, languages, ui } from "./ui.ts";

export function getLangFromPathname(pathname: string) {
	const lang = pathname.split("/")[1];
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function buildLocalizedPath(pathname: string, lang: string): string {
	const prefix = languagePrefixes[lang];
	if (prefix === undefined) return pathname;

	const segments = pathname.split("/").filter(Boolean);
	const currentPrefixes = Object.values(languagePrefixes).filter(Boolean);

	if (currentPrefixes.includes(segments[0])) {
		segments.shift();
	}

	return prefix ? `/${prefix}/${segments.join("/")}` : `/${segments.join("/")}`;
}

export const getLangStaticPaths = (() => {
	return Object.keys(languages).map((lang) => {
		const prefix = languagePrefixes[lang];
		return { params: { lang: prefix || undefined } };
	});
}) satisfies GetStaticPaths;
