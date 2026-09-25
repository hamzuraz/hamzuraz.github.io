export interface SkillCategory {
	name: string;
	core: string[];
	familiar: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		name: "Programming Languages & Runtimes",
		core: ["Go", "JavaScript", "TypeScript", "Bun", "Node.js"],
		familiar: ["Python"],
	},
	{
		name: "Web",
		core: [
			"HTML",
			"CSS",
			"Tailwind CSS",
			"Astro",
			"Svelte",
			"SvelteKit",
			"React",
			"Next.js",
		],
		familiar: ["Alpine.js", "HTMX"],
	},
	{
		name: "Mobile",
		core: ["React Native", "Expo"],
		familiar: [],
	},
	{
		name: "Databases",
		core: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
		familiar: [],
	},
	{
		name: "Tools",
		core: [
			"Git",
			"GitHub",
			"Docker",
			"Biome",
			"Vite",
			"Vitest",
			"Lefthook",
		],
		familiar: ["Playwright"],
	},
	{
		name: "Design",
		core: [],
		familiar: ["Canva", "Figma"],
	},
	{
		name: "IDE & AI",
		core: [
			"Zed",
			"Visual Studio Code",
			"Antigravity",
			"Codex",
			"GitHub Copilot",
			"OpenCode",
		],
		familiar: [],
	},
];
