import { contacts } from "@/data/contacts";
import type { HomeTranslation } from "@/i18n/pages/home";

export function localizeContacts(t: HomeTranslation | undefined) {
	return contacts.map((contact) => {
		const translation = t?.contact[contact.key];

		return {
			...contact,
			label: translation?.label ?? contact.label,
			copyTooltip: translation?.copyTooltip ?? contact.copyTooltip,
			copyAriaLabel: translation?.copyAriaLabel ?? contact.copyAriaLabel,
			openTooltip: translation?.openTooltip ?? contact.openTooltip,
			openAriaLabel: translation?.openAriaLabel ?? contact.openAriaLabel,
		};
	});
}
