/// <reference types="astro/client" />

import { type Dictionary } from "$/i18n/ui.ts";

declare global {
	namespace App {
		interface Locals {
			lang: "en-US" | "id" | "ja";
			t: (key: Dictionary["key"]) => string;
		}
	}
}
