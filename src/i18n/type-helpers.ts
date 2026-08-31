import { ui } from "./ui";

export type LangCode = keyof typeof ui;

export type Dictionary = {
	key: keyof (typeof ui)[LangCode];
};

export type TranslationFunc = (key: Dictionary["key"]) => string;

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export function isLangCode(value: string): value is LangCode {
	return Object.hasOwn(ui, value);
}
