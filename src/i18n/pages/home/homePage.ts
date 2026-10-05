import { en } from "./en";

export const homePage = {
	slug: "",
	translations: { en },
} as const;

export type HomePageTranslation =
	(typeof homePage.translations)[keyof typeof homePage.translations];
