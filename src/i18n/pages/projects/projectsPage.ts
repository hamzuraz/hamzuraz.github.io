import { en } from "./en";

export const projectsPage = {
	slug: "projects",
	translations: { en },
} as const;

export type ProjectsPageTranslation =
	(typeof projectsPage.translations)[keyof typeof projectsPage.translations];
