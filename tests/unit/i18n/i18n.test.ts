import { describe, expect, it } from "bun:test";
import {
	defaultLocale,
	getLocale,
	getLocaleStaticPaths,
	getPageTranslation,
	locales,
} from "@/i18n/i18n";
import { homePage } from "@/i18n/pages/home/homePage";

describe("i18n: getLocale", () => {
	it("returns the exact locale when provided a valid supported locale", () => {
		for (const { code } of locales) {
			const resolved = getLocale(code);
			expect(resolved).toBe(code);
		}
	});

	it("falls back to defaultLocale when input is undefined", () => {
		const resolved = getLocale(undefined);
		expect(resolved).toBe(defaultLocale);
	});

	it("falls back to defaultLocale when input is an empty string", () => {
		const resolved = getLocale("");
		expect(resolved).toBe(defaultLocale);
	});

	it("falls back to defaultLocale when input is an unsupported locale string", () => {
		expect(getLocale("unsupported-lang")).toBe(defaultLocale);
		expect(getLocale("en-US")).toBe(defaultLocale);
		expect(getLocale("id-ID")).toBe(defaultLocale);
	});
});

describe("i18n: getLocaleStaticPaths", () => {
	it("generates static paths matching all supported locales", () => {
		const paths = getLocaleStaticPaths();
		expect(paths).toHaveLength(locales.length);
	});

	it("sets lang param to undefined for defaultLocale to serve root URL", () => {
		const paths = getLocaleStaticPaths();
		const defaultPath = paths.find((p) => p.params.lang === undefined);

		expect(defaultPath).toBeDefined();
	});

	it("sets lang param to the respective locale code for non-default locales", () => {
		const paths = getLocaleStaticPaths();
		const nonDefaultLocales = locales.filter(
			(locale) => locale.code !== defaultLocale,
		);

		for (const { code } of nonDefaultLocales) {
			const matchingPath = paths.find((p) => p.params.lang === code);
			expect(matchingPath).toBeDefined();
			expect(matchingPath?.params.lang).toBe(code);
		}
	});
});

describe("i18n: getPageTranslation", () => {
	it("retrieves translation object for a supported locale", () => {
		const enTranslation = getPageTranslation(homePage, "en");
		expect(enTranslation).toBeDefined();
		expect(enTranslation?.head.title).toBeDefined();

		const idTranslation = getPageTranslation(homePage, "id");
		expect(idTranslation).toBeDefined();
		expect(idTranslation?.head.title).toBeDefined();
	});

	it("returns undefined when translation is missing for an unconfigured locale", () => {
		const translation = getPageTranslation(
			homePage,
			"unsupported" as unknown as typeof defaultLocale,
		);
		expect(translation).toBeUndefined();
	});
});
