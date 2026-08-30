import { en_US } from "./dictionary/default-en-us";
import { id } from "./dictionary/id";
import { ja } from "./dictionary/ja";

export type LangCode = keyof typeof ui;

type LangCodeRecord = Record<LangCode, string>;

export type Dictionary = {
	key: keyof (typeof ui)[LangCode];
};

export const languages: LangCodeRecord = {
	"en-US": "English",
	id: "Bahasa Indonesia",
	ja: "日本語",
};

export const langCodeDefault = "en-US";

export const langCodeSegments: LangCodeRecord = {
	"en-US": "",
	id: "id",
	ja: "ja",
};

export const ui = {
	"en-US": en_US,
	id: id,
	ja: ja,
} as const;
