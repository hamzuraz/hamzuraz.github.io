import { en_US } from "./dictionary/default-en-us";
import { id } from "./dictionary/id";
import { ja } from "./dictionary/ja";
import type { LangCode } from "./type-helpers";

type LangCodeRecord = Record<LangCode, string>;

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

export const themeOptions = {
	"en-US": {
		system: en_US["header.theme.system"],
		light: en_US["header.theme.light"],
		dark: en_US["header.theme.dark"],
	},
	id: {
		system: id["header.theme.system"],
		light: id["header.theme.light"],
		dark: id["header.theme.dark"],
	},
	ja: {
		system: ja["header.theme.system"],
		light: ja["header.theme.light"],
		dark: ja["header.theme.dark"],
	},
} as const;
