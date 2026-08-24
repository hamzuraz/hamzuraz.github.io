// @ts-check

import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://hamzuraz.github.io/",
	integrations: [svelte()],
	vite: {
		plugins: [tailwindcss()],
	},

	// Only fully works in dev/preview; behavior may differ on static hosting.
	trailingSlash: "always",

	// Redirect only "/en-US/" to "/", not "/en-US/other/segments/" to "/other/segments/"
	redirects: {
		"/en-US/": "/",
	},

	// Not needed because this project does not use Astro's built-in i18n routing features.
	// i18n: {
	// 	locales: ["en-US", "id", "ja"],
	// 	defaultLocale: "en-US",
	// },
});
