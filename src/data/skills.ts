export type SkillCategory = {
	scope: string;
	technologies: string[];
	isCore?: boolean;
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
		isCore: true,
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
		isCore: true,
	},
	{
		scope: "Mobile",
		technologies: ["React Native", "Expo"],
		isCore: true,
	},
	{
		scope: "Databases",
		technologies: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
		isCore: true,
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
		isCore: true,
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
		isCore: true,
	},
];

export const familiarSkills: SkillCategory[] = [
	{
		scope: "Familiar",
		technologies: ["Python", "Rust", "Alpine.js", "HTMX", "Playwright"],
	},
];

export const otherSkills: SkillCategory[] = [
	{
		scope: "Others",
		technologies: ["English", "Bahasa Indonesia", "Canva", "Figma"],
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
