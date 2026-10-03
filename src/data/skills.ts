type SkillCategory = {
	id: string;
	core: string[];
	familiar: string[];
};

export const skillCategories = [
	{
		id: "languages&runtimes",
		core: ["Go", "JavaScript", "TypeScript", "Bun", "Node.js"],
		familiar: ["Python", "Rust"],
	},
	{
		id: "frontend&fullstack",
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
		id: "mobile",
		core: ["React Native", "Expo"],
		familiar: [],
	},
	{
		id: "backend",
		core: [],
		familiar: ["Express", "Hono", "Elysia"],
	},
	{
		id: "databases",
		core: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
		familiar: [],
	},
	{
		id: "tools",
		core: [
			"Git",
			"GitHub",
			"Docker",
			"Vite",
			"Vite+",
			"Vitest",
			"OXC",
			"Biome",
			"Lefthook",
		],
		familiar: ["Playwright"],
	},
	{
		id: "ide&ai",
		core: [
			"Visual Studio Code",
			"Zed",
			"Antigravity",
			"Codex",
			"GitHub Copilot",
			"OpenCode",
		],
		familiar: [],
	},
	{
		id: "design",
		core: [],
		familiar: ["Canva", "Figma"],
	},
] as const satisfies SkillCategory[];
