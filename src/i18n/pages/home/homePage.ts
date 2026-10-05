import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { id } from "./id";
import { ja } from "./ja";

export const homePage = {
	slug: "",
	translations: { en, id, ja, de, es, fr },
} as const;

export type HomePageTranslation =
	(typeof homePage.translations)[keyof typeof homePage.translations];
