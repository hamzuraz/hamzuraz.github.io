// @ts-check

import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [svelte()],
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		"/en-US": "/",
		"/en-US/": "/"
	}

	// Not needed because this project does not use Astro's built-in i18n routing features.
	// i18n: {
	// 	locales: ["en-US", "id", "ja"],
	// 	defaultLocale: "en-US",
	// },
});
