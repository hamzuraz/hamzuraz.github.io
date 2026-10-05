import Email from "@/assets/Email.svg";
import GitHub from "@/assets/GitHub.svg";
import LinkedIn from "@/assets/LinkedIn.svg";

type Profile = {
	href: string;
	ariaLabel: string;
	tooltip: string;
	isExternal: boolean;
	icon: typeof GitHub;
};

export const profiles = [
	{
		href: "https://github.com/hamzuraz",
		ariaLabel: "GitHub profile",
		tooltip: "GitHub",
		isExternal: true,
		icon: GitHub,
	},
	{
		href: "mailto:hamzurazen@gmail.com",
		ariaLabel: "Send email",
		tooltip: "Email",
		isExternal: false,
		icon: Email,
	},
	{
		href: "https://linkedin.com",
		ariaLabel: "LinkedIn profile",
		tooltip: "LinkedIn",
		isExternal: true,
		icon: LinkedIn,
	},
] as const satisfies Profile[];
