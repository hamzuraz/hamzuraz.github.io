import { Mail, SquareArrowOutUpRight } from "@lucide/astro";

type Contact = {
	id: string;
	value: string;
	url: string;
	isExternal: boolean;
	icon: typeof Mail;
};

export const contacts = [
	{
		id: "email",
		value: "hamzurazen@gmail.com",
		url: "mailto:hamzurazen@gmail.com",
		isExternal: false,
		icon: Mail,
	},
	{
		id: "linkedin",
		value: "https://linkedin.com",
		url: "https://linkedin.com",
		isExternal: true,
		icon: SquareArrowOutUpRight,
	},
] as const satisfies Contact[];
