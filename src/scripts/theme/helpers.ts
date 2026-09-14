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

export function isLangCode(value: string): value is LangCode {
	return Object.hasOwn(localizedThemeOptions, value);
}

export function isThemePreference(
	value: string | undefined,
): value is ThemePreference {
	return value === "system" || value === "light" || value === "dark";
}

export function isResolvedTheme(value: string | null): value is ResolvedTheme {
	return value === "light" || value === "dark";
}
