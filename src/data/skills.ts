export type SkillCategory = {
	scope: string;
	technologies: string[];
	badgeColor: "d-badge-accent" | "";
	scopeColor: "text-base-content";
};

export type SkillTab = {
	key: "all" | "core" | "familiar" | "others";
	label: string;
	skills: SkillCategory[];
};

export const coreSkills: SkillCategory[] = [
	{
		scope: "Languages & Runtimes",
		technologies: ["JavaScript", "TypeScript", "Node.js", "Bun", "Go"],
		badgeColor: "d-badge-accent",
		scopeColor: "text-base-content",
	},
	{
		scope: "Web",
		technologies: [
			"HTML",
			"CSS",
			"Tailwind CSS",
			"React",
			"Next.js",
			"Svelte",
			"SvelteKit",
			"Astro",
		],
		badgeColor: "d-badge-accent",
		scopeColor: "text-base-content",
	},
	{
		scope: "Mobile",
		technologies: ["React Native", "Expo"],
		badgeColor: "d-badge-accent",
		scopeColor: "text-base-content",
	},
	{
		scope: "Databases",
		technologies: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
		badgeColor: "d-badge-accent",
		scopeColor: "text-base-content",
	},
	{
		scope: "Tooling",
		technologies: [
			"Git",
			"GitHub",
			"Docker",
			"Vite",
			"Vitest",
			"Biome",
			"Lefthook",
		],
		badgeColor: "d-badge-accent",
		scopeColor: "text-base-content",
	},
	{
		scope: "IDE & AI",
		technologies: [
			"Zed",
			"Visual Studio Code",
			"GitHub Copilot",
			"Antigravity",
			"Codex",
			"OpenCode",
		],
		badgeColor: "d-badge-accent",
		scopeColor: "text-base-content",
	},
];

export const familiarSkills: SkillCategory[] = [
	{
		scope: "Familiar",
		technologies: ["Python", "Rust", "Alpine.js", "HTMX", "Playwright"],
		badgeColor: "",
		scopeColor: "text-base-content",
	},
];

export const otherSkills: SkillCategory[] = [
	{
		scope: "Others",
		technologies: ["English", "Bahasa Indonesia", "Canva", "Figma"],
		badgeColor: "",
		scopeColor: "text-base-content",
	},
];

export const allSkills: SkillCategory[] = [
	...coreSkills,
	...familiarSkills,
	...otherSkills,
];

export const skillTabs: SkillTab[] = [
	{ key: "all", label: "All", skills: allSkills },
	{ key: "core", label: "Core", skills: coreSkills },
	{ key: "familiar", label: "Familiar", skills: familiarSkills },
	{ key: "others", label: "Others", skills: otherSkills },
];
