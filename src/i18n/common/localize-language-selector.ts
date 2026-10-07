import { type DefaultLocale, defaultLocale, type Locale } from "@/i18n/i18n";

type LanguageSelectorTranslation = {
	heading: string;
};
type Optional = Partial<Record<Locale, LanguageSelectorTranslation>>;
type Required = Record<DefaultLocale, LanguageSelectorTranslation>;
type LanguageSelectorTranslations = Optional & Required;

const translations: LanguageSelectorTranslations = {
	en: {
		heading: "Languages",
	},
	id: {
		heading: "Bahasa",
	},
	ja: {
		heading: "言語",
	},
	de: {
		heading: "Sprachen",
	},
	es: {
		heading: "Idiomas",
	},
	fr: {
		heading: "Langues",
	},
};

export function localizeLanguageSelector(locale: Locale) {
	const translation = translations[locale];
	return translation ?? translations[defaultLocale];
}
