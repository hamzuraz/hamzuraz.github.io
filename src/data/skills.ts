import type { DictionaryKey } from "$/i18n/types";

export type SkillCategory = {
	scopeKey: DictionaryKey;
	technologies: string[];
	isCore?: boolean;
};

export type SkillTab = {
	key: "all" | "core" | "familiar";
	labelKey: DictionaryKey;
	skills: SkillCategory[];
};

export const coreSkills: SkillCategory[] = [
	{
		scopeKey: "home.skills.table.scope.languages",
		technologies: ["JavaScript", "TypeScript", "Node.js", "Bun", "Go"],
		isCore: true,
	},
	{
		scopeKey: "home.skills.table.scope.web",
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
		isCore: true,
	},
	{
		scopeKey: "home.skills.table.scope.mobile",
		technologies: ["React Native", "Expo"],
		isCore: true,
	},
	{
		scopeKey: "home.skills.table.scope.databases",
		technologies: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
		isCore: true,
	},
	{
		scopeKey: "home.skills.table.scope.tooling",
		technologies: [
			"Git",
			"GitHub",
			"Docker",
			"Vite",
			"Vitest",
			"Biome",
			"Lefthook",
		],
		isCore: true,
	},
	{
		scopeKey: "home.skills.table.scope.ide",
		technologies: [
			"Zed",
			"Visual Studio Code",
			"GitHub Copilot",
			"Antigravity",
			"Codex",
			"OpenCode",
		],
		isCore: true,
	},
];

export const familiarSkills: SkillCategory[] = [
	{
		scopeKey: "home.skills.table.scope.familiar",
		technologies: [
			"Python",
			"Alpine.js",
			"HTMX",
			"Playwright",
			"Canva",
			"Figma",
		],
	},
];

export const allSkills: SkillCategory[] = [...coreSkills, ...familiarSkills];

export const skillTabs: SkillTab[] = [
	{
		key: "all",
		labelKey: "home.skills.table.category.all",
		skills: allSkills,
	},
	{
		key: "core",
		labelKey: "home.skills.table.category.core",
		skills: coreSkills,
	},
	{
		key: "familiar",
		labelKey: "home.skills.table.category.familiar",
		skills: familiarSkills,
	},
];
