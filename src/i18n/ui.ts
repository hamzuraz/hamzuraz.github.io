export type Dictionary = {
	key: keyof (typeof ui)[typeof defaultLang];
};

export const defaultLang = "en-US";

export const languages = {
	"en-US": "English",
	id: "Bahasa Indonesia",
	ja: "日本語",
};

export const languagePrefixes: Record<string, string> = {
	"en-US": "",
	id: "id",
	ja: "ja",
};

export const ui = {
	"en-US": {
		"hero.h1": "Hello, world!",
	},
	id: {
		"hero.h1": "Halo, dunia!",
	},
	ja: {
		"hero.h1": "こんにちは、世界！",
	},
} as const;
