/// <reference types="astro/client" />

import type { Dictionary, LangCode } from "$/i18n/ui.ts";

declare global {
	namespace App {
		interface Locals {
			langCode: LangCode;
			t: (key: Dictionary["key"]) => string;
		}
	}
}

declare global {
	interface Storage {
		theme: string | undefined;
	}
}

export type SEOProps = {
	title: string;
	description: string;
};
