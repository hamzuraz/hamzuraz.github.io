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

export function isLangCode(value: string): value is LangCode {
	return Object.hasOwn(localizedThemeOptions, value);
}

export function getLangCodeFromPathname(pathname: string): LangCode {
	const firstSegment = pathname.split("/")[1];
	return isLangCode(firstSegment) ? firstSegment : langCodeDefault;
}
