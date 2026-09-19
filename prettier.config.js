/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./src/styles/global.css",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	useTabs: true,
	tabWidth: 4,
	printWidth: 80,
	singleQuote: false,
	trailingComma: "all",
};

export default config;
