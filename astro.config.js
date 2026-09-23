// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/i18n";

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: locales.map((locale) => locale.code),
		defaultLocale,
		routing: {
			prefixDefaultLocale: false,
		},
	},
	redirects: {
		"/en/": "/",
		"/en-US/": "/",
	},
	trailingSlash: "always",
	vite: {
		plugins: [tailwindcss()],
	},
});
