import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/i18n";

// https://astro.build/config
export default defineConfig({
	site: "https://hamzuraz.github.io",
	trailingSlash: "always",
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
	vite: {
		plugins: [tailwindcss()],
	},
});
