export const langCodeDefault = "en-US";
export const localizedThemeOptions = {
	"en-US": {
		system: "System",
		light: "Light",
		dark: "Dark",
	},
	id: {
		system: "Sistem",
		light: "Terang",
		dark: "Gelap",
	},
	ja: {
		system: "システム",
		light: "ライト",
		dark: "ダーク",
	},
} as const;

export type LangCode = keyof typeof localizedThemeOptions;
export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = Exclude<ThemePreference, "system">;

export function isLangCode(v: string): v is LangCode {
	return Object.hasOwn(localizedThemeOptions, v);
}

export function isThemePreference(v: string | undefined): v is ThemePreference {
	return v === "system" || v === "light" || v === "dark";
}

export function isResolvedTheme(v: string | null): v is ResolvedTheme {
	return v === "light" || v === "dark";
}
