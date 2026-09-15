const homePage = {
	// HERO SECTION ============================================================
	"home.hero.eyebrow": "Last Updated",
	"home.hero.role": "Software Engineer",
	"home.hero.subheading":
		"From the interface users interact with to the architecture that keeps it running — I\u00A0build both, and I\u00A0build them to scale.",
	"home.hero.seemore": "See More",
	"home.hero.cta.primary": "See resume",
	"home.hero.cta.secondary": "Get in touch",

	// PROJECTS SECTION ========================================================
	"home.projects.eyebrow": "01 / Selected Work",
	"home.projects.title": "Projects",
	"home.projects.description":
		"A few things I've built along the way — each one started from an actual problem I wanted to solve.",
	"home.projects.cta": "See all projects",

	// SKILLS SECTION ==========================================================
	"home.skills.eyebrow": "02 / Expertise",
	"home.skills.title": "Skills",
	"home.skills.description":
		"Software engineer building reliable, scalable solutions across web, mobile, and backend. Driven by curiosity, I'm constantly exploring new technologies and sharpening my skills to build better products.",

	// CONTACT SECTION =========================================================
	"home.contact.eyebrow": "03 / Get in touch",
	"home.contact.title": "Contact",
	"home.contact.description":
		"Got a project in mind, a question, or just want to say hi? My inbox is open.",
	"home.contact.cta.email": "Email me",
	"home.contact.cta.linkedin": "Find me on LinkedIn",
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
 *   Skip it for one-off values ("header.logo", "header.themetoggle", "footer.copyright").
 * - semantic: always the last segment, describes meaning — never markup
 *   (e.g. "title" not "h1", "cta" not "button").
 */
export const en_US = {
	// HEAD ====================================================================
	"home.title": "Rifki Muhazzar — Software Engineer",
	"home.description":
		"Rifki Muhazzar's portfolio — a software engineer who likes building things end to end. Take a look at his projects, skills, and how to get in touch.",

	// HEADER ==================================================================
	"header.nav.projects": "Projects",
	"header.nav.skills": "Skills",
	"header.nav.contact": "Contact",
	"header.theme.system": "System",
	"header.theme.light": "Light",
	"header.theme.dark": "Dark",

	// FOOTER ==================================================================
	"footer.copyright": "Rifki Muhazzar. All rights reserved.",

	// HOME PAGE ===============================================================
	...homePage,
} as const;

export type DictionaryShape = Record<keyof typeof en_US, string>;
