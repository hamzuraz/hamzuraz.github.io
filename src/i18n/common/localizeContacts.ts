import { contacts } from "@/data/contacts";
import { defaultLocale, getPageTranslation, type Locale } from "@/i18n/i18n";
import { homePage } from "@/i18n/pages/home/homePage";

export function localizeContacts(locale: Locale) {
	const translation = getPageTranslation(homePage, locale);

	return contacts.map((contact) => {
		const contactTranslation = translation?.contact[contact.id];

		const defaultContactTranslation =
			homePage.translations[defaultLocale].contact[contact.id];

		return {
			...contact,
			label: contactTranslation?.label ?? defaultContactTranslation.label,
			copyTooltip:
				contactTranslation?.copyTooltip ??
				defaultContactTranslation.copyTooltip,
			copyAriaLabel:
				contactTranslation?.copyAriaLabel ??
				defaultContactTranslation.copyAriaLabel,
			openTooltip:
				contactTranslation?.openTooltip ??
				defaultContactTranslation.openTooltip,
			openAriaLabel:
				contactTranslation?.openAriaLabel ??
				defaultContactTranslation.openAriaLabel,
		};
	});
}
