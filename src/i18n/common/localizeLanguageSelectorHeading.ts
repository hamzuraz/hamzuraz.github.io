import type { DefaultLocale, Locale } from "@/i18n/i18n";

type LanguageSelectorHeadings = Partial<Record<Locale, string>> &
	Record<DefaultLocale, string>;

const headings: LanguageSelectorHeadings = {
	en: "Languages",
	id: "Bahasa",
	ja: "言語",
	de: "Sprachen",
	es: "Idiomas",
	fr: "Langues",
};

export function localizeLanguageSelectorHeading(locale: Locale) {
	const translation = headings[locale];
	return translation ?? headings.en;
}
