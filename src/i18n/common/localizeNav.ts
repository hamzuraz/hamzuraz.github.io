import type { DefaultLocale, Locale } from "@/i18n/i18n";

type NavTranslation = {
	projects: string;
	skills: string;
	contact: string;
	openMenu: string;
	closeMenu: string;
};

type NavTranslations = Partial<Record<Locale, NavTranslation>> &
	Record<DefaultLocale, NavTranslation>;

const nav: NavTranslations = {
	en: {
		projects: "Projects",
		skills: "Skills",
		contact: "Contact",
		openMenu: "Open navigation menu",
		closeMenu: "Close navigation menu",
	},
	id: {
		projects: "Proyek",
		skills: "Keahlian",
		contact: "Kontak",
		openMenu: "Buka menu navigasi",
		closeMenu: "Tutup menu navigasi",
	},
	ja: {
		projects: "プロジェクト",
		skills: "スキル",
		contact: "お問い合わせ",
		openMenu: "ナビゲーションメニューを開く",
		closeMenu: "ナビゲーションメニューを閉じる",
	},
	de: {
		projects: "Projekte",
		skills: "Fähigkeiten",
		contact: "Kontakt",
		openMenu: "Navigationsmenü öffnen",
		closeMenu: "Navigationsmenü schließen",
	},
	es: {
		projects: "Proyectos",
		skills: "Habilidades",
		contact: "Contacto",
		openMenu: "Abrir menú de navegación",
		closeMenu: "Cerrar menú de navegación",
	},
	fr: {
		projects: "Projets",
		skills: "Compétences",
		contact: "Contact",
		openMenu: "Ouvrir le menu de navigation",
		closeMenu: "Fermer le menu de navigation",
	},
};

export function localizeNav(locale: Locale) {
	const translation = nav[locale];
	return translation ?? nav.en;
}
