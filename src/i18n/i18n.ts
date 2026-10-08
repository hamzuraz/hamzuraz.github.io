import { homePage } from "./pages/home/home-page";
import { projectsPage } from "./pages/projects/projects-page";

export const locales = [
	{ code: "en", name: "English" },
	{ code: "id", name: "Bahasa Indonesia" },
	{ code: "ja", name: "日本語" },
	{ code: "de", name: "Deutsch" },
	{ code: "es", name: "Español" },
	{ code: "fr", name: "Français" },
	{ code: "zh-CN", name: "简体中文" },
	{ code: "zh-TW", name: "繁體中文" },
] as const;

export const defaultLocale = "en";
export const localizedPages = [homePage, projectsPage] as const;

export type Locale = (typeof locales)[number]["code"];
export type DefaultLocale = typeof defaultLocale;

type LocalizedPage = (typeof localizedPages)[number];
export type PageTranslation<T extends LocalizedPage> = Partial<
	Record<Locale, T["translations"][keyof T["translations"]]>
>;

export function getLocale(currentLocale: string | undefined): Locale {
	return locales.some(({ code }) => code === currentLocale)
		? (currentLocale as Locale)
		: defaultLocale;
}

export function getLocaleStaticPaths() {
	return locales.map(({ code }) => ({
		params: { lang: code === defaultLocale ? undefined : code },
	}));
}

export function getPageTranslation<T extends LocalizedPage>(
	page: T,
	locale: Locale,
) {
	const translations = page.translations as PageTranslation<T>;
	const translation = translations[locale];
	return translation;
}
