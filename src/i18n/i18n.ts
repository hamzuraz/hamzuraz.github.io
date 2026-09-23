import { exampleOne } from "./pages/example-one";
import { exampleTwo } from "./pages/example-two";

export const locales = [
	{ code: "en", name: "English" },
	{ code: "id", name: "Bahasa Indonesia" },
	{ code: "ja", name: "日本語" },
	{ code: "es", name: "Español" },
	{ code: "fr", name: "Français" },
	{ code: "zh-CN", name: "简体中文" },
	{ code: "zh-TW", name: "繁體中文" },
] as const;
export const defaultLocale = "en";
export const localizedPages = [exampleOne, exampleTwo] as const;

type Locale = (typeof locales)[number]["code"];
type LocalizedPage = (typeof localizedPages)[number];
type PageTranslation =
	LocalizedPage["translations"][keyof LocalizedPage["translations"]];

export function getLocale(currentLocale: string | undefined): Locale {
	return locales.some((locale) => locale.code === currentLocale)
		? (currentLocale as Locale)
		: defaultLocale;
}

export function getLocaleStaticPaths() {
	return locales.map(({ code }) => ({
		params: { lang: code === defaultLocale ? undefined : code },
	}));
}

export function getPageTranslation(
	page: LocalizedPage,
	locale: Locale,
): PageTranslation | undefined {
	return page.translations[locale as keyof typeof page.translations];
}
