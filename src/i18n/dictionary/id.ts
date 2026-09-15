import type { DictionaryShape } from "./en-US";

const homePage = {
	// HERO SECTION ============================================================
	"home.hero.eyebrow": "Terakhir Diperbarui",
	"home.hero.role": "Software Engineer",
	"home.hero.subheading":
		"Mulai dari antarmuka yang berinteraksi langsung dengan pengguna, sampai arsitektur yang menjaganya tetap berjalan — saya yang membangun keduanya, dan saya membangunnya agar siap berkembang.",
	"home.hero.seemore": "Lihat Selengkapnya",
	"home.hero.cta.primary": "Lihat CV",
	"home.hero.cta.secondary": "Hubungi Saya",

	// PROJECTS SECTION ========================================================
	"home.projects.eyebrow": "01 / Karya Pilihan",
	"home.projects.title": "Proyek",
	"home.projects.description":
		"Beberapa hal yang pernah saya bangun — masing-masing berawal dari masalah nyata yang ingin saya selesaikan.",
	"home.projects.cta": "Lihat semua proyek",

	// SKILLS SECTION ==========================================================
	"home.skills.eyebrow": "02 / Kompetensi",
	"home.skills.title": "Keahlian",
	"home.skills.description":
		"Software engineer yang membangun solusi andal dan scalable, mulai dari web, mobile, sampai backend. Didorong rasa ingin tahu, saya terus menjelajahi teknologi baru dan mengasah kemampuan untuk membuat produk yang lebih baik.",
	"home.skills.table.category.all": "Semua",
	"home.skills.table.category.core": "Inti",
	"home.skills.table.category.familiar": "Familiar",
	"home.skills.table.scope.languages": "Bahasa & Runtime",
	"home.skills.table.scope.web": "Web",
	"home.skills.table.scope.mobile": "Mobile",
	"home.skills.table.scope.databases": "Database",
	"home.skills.table.scope.tooling": "Tooling",
	"home.skills.table.scope.ide": "IDE & AI",
	"home.skills.table.scope.familiar": "Familiar",

	// CONTACT SECTION =========================================================
	"home.contact.eyebrow": "03 / Hubungi Saya",
	"home.contact.title": "Kontak",
	"home.contact.description":
		"Punya proyek yang ingin didiskusikan, ada pertanyaan, atau sekadar mau say hi? Inbox saya selalu terbuka.",
	"home.contact.cta.email": "Kirim email",
	"home.contact.cta.linkedin": "Temukan saya di LinkedIn",
};

export const id = {
	// HEAD ====================================================================
	"home.title": "Rifki Muhazzar — Software Engineer",
	"home.description":
		"Portofolio Rifki Muhazzar — seorang software engineer yang suka membangun sesuatu dari awal sampai akhir. Lihat proyek-proyeknya, keahliannya, dan cara menghubunginya.",

	// HEADER ==================================================================
	"header.nav.projects": "Proyek",
	"header.nav.skills": "Keahlian",
	"header.nav.contact": "Kontak",
	"header.theme.system": "Sistem",
	"header.theme.light": "Terang",
	"header.theme.dark": "Gelap",

	// FOOTER ==================================================================
	"footer.copyright": "Rifki Muhazzar. Seluruh hak cipta dilindungi.",

	// HOME PAGE ===============================================================
	...homePage,
} as const satisfies DictionaryShape;
