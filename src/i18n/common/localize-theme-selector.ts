import { type DefaultLocale, defaultLocale, type Locale } from "@/i18n/i18n";

type ThemeSelectorTranslation = {
	heading: string;
	modes: { light: string; dark: string };
};
type Optional = Partial<Record<Locale, ThemeSelectorTranslation>>;
type Required = Record<DefaultLocale, ThemeSelectorTranslation>;
type ThemeSelectorTranslations = Optional & Required;

const translations: ThemeSelectorTranslations = {
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

export function localizeThemeSelector(locale: Locale) {
	const translation = translations[locale];
	return translation ?? translations[defaultLocale];
}
