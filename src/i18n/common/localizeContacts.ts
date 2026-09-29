import { contacts } from "@/data/contacts";
import type { PageTranslation } from "@/i18n/i18n";
import type { Home } from "@/i18n/pages/home";

export function localizeContacts(t: PageTranslation<Home> | undefined) {
	return contacts.map((c) => {
		switch (c.label) {
			case "Email":
				return {
					...c,
					label: t?.contact.emailLabel ?? c.label,
					copyTooltip: t?.contact.emailCopyTooltip ?? c.copyTooltip,
					copyAriaLabel:
						t?.contact.emailCopyAriaLabel ?? c.copyAriaLabel,
					openTooltip: t?.contact.emailOpenTooltip ?? c.openTooltip,
					openAriaLabel:
						t?.contact.emailOpenAriaLabel ?? c.openAriaLabel,
				};
			case "LinkedIn":
				return {
					...c,
					label: t?.contact.linkedinLabel ?? c.label,
					copyTooltip:
						t?.contact.linkedinCopyTooltip ?? c.copyTooltip,
					copyAriaLabel:
						t?.contact.linkedinCopyAriaLabel ?? c.copyAriaLabel,
					openTooltip:
						t?.contact.linkedinOpenTooltip ?? c.openTooltip,
					openAriaLabel:
						t?.contact.linkedinOpenAriaLabel ?? c.openAriaLabel,
				};
			default:
				return c;
		}
	});
}
