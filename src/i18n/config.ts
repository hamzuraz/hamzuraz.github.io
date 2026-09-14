import { en_US } from "./dictionary/en-US";
import { id } from "./dictionary/id";
import { ja } from "./dictionary/ja";
import { getObjectKeys, type LangCode } from "./helpers";

type LangCodeRecord = Record<LangCode, string>;

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

export const langCodes = getObjectKeys(languages);

export const langCodeDefault = "en-US";

export const ui = {
	"en-US": en_US,
	id: id,
	ja: ja,
} as const;
