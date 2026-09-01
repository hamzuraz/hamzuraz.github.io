/// <reference types="astro/client" />

import type { LangCode, TranslationFunc } from "./i18n/type-helpers";

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

export type LinkProps = {
	href: string;
	label: string;
};
