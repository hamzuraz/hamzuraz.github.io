export type Dictionary = {
	key: keyof (typeof ui)[typeof defaultLang];
};

export const defaultLang = "en-US";

export const languages = {
	"en-US": "English",
	id: "Bahasa Indonesia",
	ja: "日本語",
};

export const languagePrefixes: Record<string, string> = {
	"en-US": "",
	id: "id",
	ja: "ja",
};

/**
 * Key format: namespace[.group].semantic
 *
 * - namespace: the page, or a shared component reused across pages
 *   (e.g. "header", "footer"). Reflects what the page is ABOUT, not a
 *   literal copy of the URL: singular for a page about one item
 *   ("project.details" for "/projects/[id]/details" — it shows ONE
 *   project, even though the URL's "projects" segment marks the
 *   collection), plural for a page listing many ("projects.list" for
 *   "/projects"). Never include dynamic values like IDs — the key
 *   represents the page template, not a specific instance.
 * - group: optional. Add it only when that namespace has a repeated set of
 *   items that would otherwise collide (e.g. "header.nav.home", "header.nav.about").
 *   Skip it for one-off values ("header.logo", "header.themeToggle", "footer.copyright").
 * - semantic: always the last segment, describes meaning — never markup
 *   (e.g. "title" not "h1", "cta" not "button").
 */
export const ui = {
	"en-US": {
		"home.hero.title": "Hello, world!",
	},
	id: {
		"home.hero.title": "Halo, dunia!",
	},
	ja: {
		"home.hero.title": "こんにちは、世界！",
	},
} as const;
