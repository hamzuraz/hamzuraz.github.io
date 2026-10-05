type SkillCategory = {
	id: string;
	core: string[];
	familiar: string[];
};

export const skillCategories = [
	{
		id: "languages&runtimes",
		core: ["Go", "JavaScript", "TypeScript", "Node.js", "Bun"],
		familiar: ["Python", "Rust", "Tokio"],
	},
	{
		id: "backendFrameworks",
		core: [],
		familiar: [
			"GIN",
			"Fiber",
			"Express",
			"Hono",
			"Elysia",
			"FastAPI",
			"Axum",
		],
	},
	{
		id: "web",
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
		core: ["React Native", "Expo", "Uniwind"],
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
		id: "databases",
		core: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
		familiar: ["MariaDB", "Turso"],
	},
	{
		id: "deployment",
		core: ["Railway", "Vercel"],
		familiar: [],
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
