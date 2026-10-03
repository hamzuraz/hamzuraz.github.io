type Theme = {
	id: string;
	name: string;
	mode: "Light" | "Dark";
};

export const themes = [
	{ id: "default-light", name: "Default", mode: "Light" },
	{ id: "default-dark", name: "Default", mode: "Dark" },
	{ id: "brutalist-light", name: "Brutalist", mode: "Light" },
	{ id: "brutalist-dark", name: "Brutalist", mode: "Dark" },
	{ id: "catppuccin-light", name: "Catppuccin", mode: "Light" },
	{ id: "catppuccin-dark", name: "Catppuccin", mode: "Dark" },
	{ id: "monochrome-light", name: "Monochrome", mode: "Light" },
	{ id: "monochrome-dark", name: "Monochrome", mode: "Dark" },
	{ id: "sandstone-light", name: "Sandstone", mode: "Light" },
	{ id: "sandstone-dark", name: "Sandstone", mode: "Dark" },
	{ id: "terracotta-light", name: "Terracotta", mode: "Light" },
	{ id: "terracotta-dark", name: "Terracotta", mode: "Dark" },
] as const satisfies Theme[];
