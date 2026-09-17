import type { DictionaryKey } from "$/i18n/types";

export type NavItem = {
	path: string;
	labelKey: Extract<DictionaryKey, `header.nav.${string}`>;
};

export const navigationItems: NavItem[] = [
	{
		path: "/projects/",
		labelKey: "header.nav.projects",
	},
	{
		path: "/#skills",
		labelKey: "header.nav.skills",
	},
	{
		path: "/#contact",
		labelKey: "header.nav.contact",
	},
];
