import { localizedThemeOptions } from "./data";

export type LangCode = keyof typeof localizedThemeOptions;
export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = Exclude<ThemePreference, "system">;

export function isThemePreference(
	value: string | undefined,
): value is ThemePreference {
	return value === "system" || value === "light" || value === "dark";
}

export function isResolvedTheme(value: string | null): value is ResolvedTheme {
	return value === "light" || value === "dark";
}

export function isLangCode(value: string): value is LangCode {
	return Object.hasOwn(localizedThemeOptions, value);
}
