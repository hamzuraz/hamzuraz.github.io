import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { id } from "./id";
import { ja } from "./ja";

export const projectsPage = {
	slug: "projects",
	translations: { en, id, ja, de, es, fr },
} as const;

export type ProjectsPageTranslation =
	(typeof projectsPage.translations)[keyof typeof projectsPage.translations];
