import type { DictionaryShape } from "./en-US";

const homePage = {
	"home.hero.eyebrow": "Terakhir Diperbarui",
	"home.hero.role": "Software Engineer",
	"home.hero.subheading":
		"Dari antarmuka yang disentuh pengguna hingga arsitektur yang menopangnya di balik layar — saya membangun keduanya, dan saya membangunnya agar siap berkembang.",
	"home.hero.seemore": "Lihat selengkapnya",
	"home.hero.cta.primary": "Lihat resume",
	"home.hero.cta.secondary": "Hubungi saya",

	"home.projects.eyebrow": "01 / Karya Pilihan",
	"home.projects.title": "Proyek",
	"home.projects.description":
		"Beberapa hal yang pernah saya bangun — masing-masing berawal dari masalah nyata yang ingin saya selesaikan.",
	"home.projects.cta": "Lihat semua proyek",

	"home.skills.eyebrow": "02 / Keahlian",
	"home.skills.title": "Keahlian",
	"home.skills.description":
		"Saya bekerja di web, mobile, dan backend — di mana pun ada masalah yang perlu dipecahkan. Masih terus belajar hal baru, soalnya nggak tahan kalau ada teknologi yang belum sempat dicoba.",

	"home.contact.eyebrow": "03 / Hubungi Saya",
	"home.contact.title": "Kontak",
	"home.contact.description":
		"Punya proyek, pertanyaan, atau sekadar mau say hi? Kotak masuk saya selalu terbuka.",
	"home.contact.cta.email": "Kirim email",
	"home.contact.cta.linkedin": "Temukan saya di LinkedIn",
};

export const id = {
	"home.title": "Rifki Muhazzar — Software Engineer",
	"home.description":
		"Portofolio Rifki Muhazzar — seorang software engineer yang suka membangun sesuatu dari ujung ke ujung. Lihat proyek, keahlian, dan cara menghubunginya.",

	"header.nav.projects": "Proyek",
	"header.nav.skills": "Keahlian",
	"header.nav.contact": "Kontak",
	"header.theme.system": "Sistem",
	"header.theme.light": "Terang",
	"header.theme.dark": "Gelap",

	"footer.copyright": "Rifki Muhazzar. Hak cipta dilindungi.",

	...homePage,
} as const satisfies DictionaryShape;
