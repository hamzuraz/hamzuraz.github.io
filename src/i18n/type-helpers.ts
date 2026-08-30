import { type LangCode, ui } from "./ui";

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export function isLangCode(value: string): value is LangCode {
	return Object.hasOwn(ui, value);
}
