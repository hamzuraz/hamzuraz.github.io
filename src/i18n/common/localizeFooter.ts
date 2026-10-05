import { type DefaultLocale, defaultLocale, type Locale } from "@/i18n/i18n";

type FooterTranslation = {
	rights: string;
};
type Optional = Partial<Record<Locale, FooterTranslation>>;
type Required = Record<DefaultLocale, FooterTranslation>;
type FooterTranslations = Optional & Required;

const translations: FooterTranslations = {
	en: {
		rights: "All rights reserved.",
	},
	id: {
		rights: "Hak cipta dilindungi.",
	},
	ja: {
		rights: "無断転載を禁じます。",
	},
	de: {
		rights: "Alle Rechte vorbehalten.",
	},
	es: {
		rights: "Todos los derechos reservados.",
	},
	fr: {
		rights: "Tous droits réservés.",
	},
};

export function localizeFooter(locale: Locale) {
	const translation = translations[locale];
	return translation ?? translations[defaultLocale];
}
