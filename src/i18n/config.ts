import { en_US } from "./dictionary/en-US";
import { id } from "./dictionary/id";
import { ja } from "./dictionary/ja";
import type { LangCode, LangCodeRecord } from "./types";

export const languages: LangCodeRecord = {
	"en-US": "English",
	id: "Bahasa Indonesia",
	ja: "日本語",
};

export const langCodeSegments: LangCodeRecord = {
	"en-US": "",
	id: "id",
	ja: "ja",
};

export const langCodes: readonly LangCode[] = ["en-US", "id", "ja"] as const;

export const langCodeDefault: LangCode = "en-US";

export const ui = {
	"en-US": en_US,
	id: id,
	ja: ja,
} as const;
