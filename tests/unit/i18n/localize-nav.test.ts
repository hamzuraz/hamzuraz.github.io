import { describe, expect, it } from "bun:test";
import { localizeNav } from "@/i18n/common/localize-nav";
import { defaultLocale, type Locale } from "@/i18n/i18n";

describe("i18n: localizeNav", () => {
	it("returns correct translations for explicitly supported locales", () => {
		const englishNav = localizeNav("en");
		expect(englishNav.projects).toBe("Projects");
		expect(englishNav.skills).toBe("Skills");
		expect(englishNav.contact).toBe("Contact");
		expect(englishNav.openMenu).toBe("Open navigation menu");
		expect(englishNav.closeMenu).toBe("Close navigation menu");

		const indonesianNav = localizeNav("id");
		expect(indonesianNav.projects).toBe("Proyek");
		expect(indonesianNav.skills).toBe("Keahlian");
		expect(indonesianNav.contact).toBe("Kontak");
		expect(indonesianNav.openMenu).toBe("Buka menu navigasi");
		expect(indonesianNav.closeMenu).toBe("Tutup menu navigasi");
	});

	it("falls back to defaultLocale translation when requested locale lacks specific overrides", () => {
		const defaultTranslation = localizeNav(defaultLocale);
		const zhCnNav = localizeNav("zh-CN" as Locale);

		expect(zhCnNav).toEqual(defaultTranslation);
	});

	it("always includes all required navigation keys in the returned object", () => {
		const nav = localizeNav("en");
		const requiredKeys = [
			"projects",
			"skills",
			"contact",
			"openMenu",
			"closeMenu",
		] as const;

		for (const key of requiredKeys) {
			expect(nav[key]).toBeDefined();
			expect(typeof nav[key]).toBe("string");
			expect(nav[key].length).toBeGreaterThan(0);
		}
	});
});
