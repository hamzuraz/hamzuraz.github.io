import { Mail, SquareArrowOutUpRight } from "@lucide/astro";

export const contacts = [
	{
		id: "email",
		value: "hamzurazen@gmail.com",
		openUrl: "mailto:hamzurazen@gmail.com",
		isExternal: false,
		icon: Mail,
	},
	{
		id: "linkedin",
		value: "https://linkedin.com",
		openUrl: "https://linkedin.com",
		isExternal: true,
		icon: SquareArrowOutUpRight,
	},
] as const;
