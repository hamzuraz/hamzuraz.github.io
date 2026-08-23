import { en_US } from "./dictionary/default-en-us.ts";
import { id } from "./dictionary/id.ts";
import { ja } from "./dictionary/ja.ts";

export type Dictionary = {
	key: keyof (typeof ui)[LangCode];
};

export type LangCode = keyof typeof ui;

export const languages: Record<LangCode, string> = {
	"en-US": "English",
	id: "Bahasa Indonesia",
	ja: "日本語",
};

export const defaultLangCode = "en-US";

export const langCodeUrlPrefixes: Record<LangCode, string> = {
	"en-US": "",
	id: "id",
	ja: "ja",
};

export const ui = {
	"en-US": en_US,
	id: id,
	ja: ja,
} as const;
