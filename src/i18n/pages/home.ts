const en = {
	head: {
		title: "Rifki Muhazzar — Software Engineer",
		description:
			"Personal portfolio of Rifki Muhazzar, a software engineer building fast, reliable, and accessible applications across the modern web, mobile, and backend systems.",
	},
	hero: {
		sectionTag: "01 / SOFTWARE ENGINEER",
		name: "Rifki Muhazzar",
		bio: "Software engineer building fast, reliable, and accessible applications across the modern web, mobile, and backend systems.",
		seeResume: "See resume",
		getInTouch: "Get in touch",
	},
	projects: {
		sectionTag: "02 / PROJECTS",
		heading: "Selected Works",
		description:
			"A growing collection of projects built to learn, experiment, and solve real problems. Browse the code or try a live demo where available.",
		seeAll: "See all projects",
	},
	skills: {
		sectionTag: "03 / SKILLS",
		heading: "Tech Stack",
		description:
			"The technologies I use to build software that is robust, scalable, and easy to maintain. Core covers what I work with confidently; Familiar covers what I've explored and can pick up quickly.",
		tabs: {
			all: "All",
			core: "Core",
			familiar: "Familiar",
		},
	},
	contact: {
		sectionTag: "04 / CONTACT",
		heading: "Get in Touch",
		description:
			"I am currently open to new opportunities, collaborations, and discussions on software engineering. Feel free to reach out via email or LinkedIn.",
		email: {
			label: "Email",
			copyTooltip: "Copy email",
			copyAriaLabel: "Copy Email",
			openTooltip: "Send email",
			openAriaLabel: "Open Email",
		},
		linkedin: {
			label: "LinkedIn",
			copyTooltip: "Copy LinkedIn URL",
			copyAriaLabel: "Copy LinkedIn URL",
			openTooltip: "Open LinkedIn",
			openAriaLabel: "Open LinkedIn",
		},
	},
} as const;

export const home = {
	slug: "",
	translations: { en },
} as const;

export type Home = typeof home;
