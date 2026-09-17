import type { Dictionary } from "$/i18n/helpers";

export type NavItem = {
	path: string;
	labelKey: Extract<Dictionary["key"], `header.nav.${string}`>;
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
