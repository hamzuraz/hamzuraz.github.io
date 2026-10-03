import type { DefaultLocale, Locale } from "@/i18n/i18n";

type FooterTranslation = {
	rights: string;
};

type FooterTranslations = Partial<Record<Locale, FooterTranslation>> &
	Record<DefaultLocale, FooterTranslation>;

const footer: FooterTranslations = {
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
	const translation = footer[locale];
	return translation ?? footer.en;
}
