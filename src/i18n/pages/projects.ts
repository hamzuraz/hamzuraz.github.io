const en = {
	head: {
		title: "Projects — Rifki Muhazzar",
		description:
			"Projects by Rifki Muhazzar, a software engineer building fast, reliable, and accessible applications across the modern web, mobile, and backend systems.",
	},
	sectionTag: "ARCHIVE",
	heading: "Projects",
	description:
		"Everything I've built to learn, experiment, and solve real problems. Browse the code or try a live demo where available.",
};

export const projects = {
	slug: "projects",
	translations: { en },
} as const;

export type ProjectsTranslation =
	(typeof projects.translations)[keyof typeof projects.translations];
