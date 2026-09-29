import { Mail, SquareArrowOutUpRight } from "@lucide/astro";

export const contacts = [
	{
		label: "Email",
		copyTooltip: "Copy email",
		copyAriaLabel: "Copy email",
		openTooltip: "Send email",
		openAriaLabel: "Send email",

		value: "hamzurazen@gmail.com",
		openUrl: "mailto:hamzurazen@gmail.com",
		isExternal: false,
		icon: Mail,
	},
	{
		label: "LinkedIn",
		copyTooltip: "Copy LinkedIn URL",
		copyAriaLabel: "Copy LinkedIn URL",
		openTooltip: "Open LinkedIn",
		openAriaLabel: "Open LinkedIn",

		value: "https://linkedin.com",
		openUrl: "https://linkedin.com",
		isExternal: true,
		icon: SquareArrowOutUpRight,
	},
] as const;
