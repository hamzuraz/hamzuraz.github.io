/// <reference types="astro/client" />

import type { LangCode, TranslationFunc } from "./i18n/types";

declare global {
	namespace App {
		interface Locals {
			langCode: LangCode;
			t: TranslationFunc;
		}
	}
}
