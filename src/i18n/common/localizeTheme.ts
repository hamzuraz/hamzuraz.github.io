import type { DefaultLocale, Locale } from "@/i18n/i18n";

type ThemeTranslation = {
	heading: string;
	modes: { light: string; dark: string };
};

type ThemeTranslations = Partial<Record<Locale, ThemeTranslation>> &
	Record<DefaultLocale, ThemeTranslation>;

const translations: ThemeTranslations = {
	en: {
		heading: "Themes",
		modes: { light: "Light", dark: "Dark" },
	},
	id: {
		heading: "Tema",
		modes: { light: "Terang", dark: "Gelap" },
	},
	ja: {
		heading: "テーマ",
		modes: { light: "ライト", dark: "ダーク" },
	},
	de: {
		heading: "Themen",
		modes: { light: "Hell", dark: "Dunkel" },
	},
	es: {
		heading: "Temas",
		modes: { light: "Claro", dark: "Oscuro" },
	},
	fr: {
		heading: "Thèmes",
		modes: { light: "Clair", dark: "Sombre" },
	},
};

export function localizeTheme(locale: Locale) {
	const translation = translations[locale];
	return translation ?? translations.en;
}
