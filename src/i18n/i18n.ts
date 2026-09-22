import { exampleOne } from "./pages/example-one";
import { exampleTwo } from "./pages/example-two";

export const locales = [
	{ code: "en-US", label: "English" },
	{ code: "id", label: "Bahasa Indonesia" },
	{ code: "ja", label: "日本語" },
] as const;

export const defaultLocale = "en-US";

export const localizedPages = [exampleOne, exampleTwo] as const;

export type Locale = (typeof locales)[number]["code"];

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
