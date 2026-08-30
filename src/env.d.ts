/// <reference types="astro/client" />

import type { LangCode, TranslationFunc } from "./i18n/ui";

declare global {
	namespace App {
		interface Locals {
			langCode: LangCode;
			t: TranslationFunc;
		}
	}
}

export type HeadProps = {
	title: string;
	description: string;
};
