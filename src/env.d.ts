/// <reference types="astro/client" />

import type { Dictionary, LangCode } from "$/i18n/ui";

declare global {
	type TranslationFunc = (key: Dictionary["key"]) => string;
}

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
