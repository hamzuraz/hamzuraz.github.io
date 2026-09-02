import {
	isLangCode,
	type LangCode,
} from "../theme-selector/theme-selector-helpers";

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

// export const localizedMenuOptions = {
// 	"en-US": {
// 		"header.nav.projects": "Projects",
// 		"header.nav.skills": "Skills",
// 		"header.nav.contact": "Contact",
// 		"header.nav.social": "Social",
// 	},
// 	id: {
// 		"header.nav.projects": "Proyek",
// 		"header.nav.skills": "Keterampilan",
// 		"header.nav.contact": "Kontak",
// 		"header.nav.social": "Sosial",
// 	},
// 	ja: {
// 		"header.nav.projects": "プロジェクト",
// 		"header.nav.skills": "スキル",
// 		"header.nav.contact": "お問い合わせ",
// 		"header.nav.social": "ソーシャル",
// 	},
// } as const;

export const localizedMenuItemInternal = {
	"en-US": ["Projects", "Skills", "Contact", "Projects", "Skills", "Contact"],
	id: ["Proyek", "Keterampilan", "Kontak", "Proyek", "Keterampilan", "Kontak"],
	ja: [
		"プロジェクト",
		"スキル",
		"お問い合わせ",
		"プロジェクト",
		"スキル",
		"お問い合わせ",
	],
} as const;

export const localizedMenuItemSocial = {
	"en-US": ["Social", "Social"],
	id: ["Sosial", "Sosial"],
	ja: ["ソーシャル", "ソーシャル"],
} as const;

export function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export function buildLocalizedRoutePath(
	langCode: string,
	pathname: string,
): string {
	if (!isLangCode(langCode)) return pathname;

	const langCodeSegment = langCodeSegments[langCode];
	const segments = pathname.split("/").filter(Boolean);

	const hasTrailingSlash = pathname.endsWith("/");
	const hasLangCodeSegment = getObjectKeys(langCodeSegments).some(
		(code) => code === segments[0],
	);

	if (hasLangCodeSegment) segments.shift();

	const localizedRoutePath = langCodeSegment
		? `/${langCodeSegment}/${segments.join("/")}`
		: `/${segments.join("/")}`;

	if (hasTrailingSlash && !localizedRoutePath.endsWith("/")) {
		return `${localizedRoutePath}/`;
	}

	return localizedRoutePath;
}
