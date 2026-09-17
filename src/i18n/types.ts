import type { en_US } from "./dictionary/en-US";

export type LangCode = "en-US" | "id" | "ja";

export type DictionaryKey = keyof typeof en_US;

export type Dictionary = {
	key: DictionaryKey;
};

export type TranslationFunc = (key: DictionaryKey) => string;

export type LangCodeRecord = Record<LangCode, string>;
