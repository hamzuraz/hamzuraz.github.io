import { describe, expect, it } from "bun:test";
import { localizeThemeSelector } from "@/i18n/common/localize-theme-selector";
import { defaultLocale, type Locale } from "@/i18n/i18n";

describe("i18n: localizeThemeSelector", () => {
	it("returns proper headings and mode translations for supported locales", () => {
		const englishTheme = localizeThemeSelector("en");
		expect(englishTheme.heading).toBe("Themes");
		expect(englishTheme.modes.light).toBe("Light");
		expect(englishTheme.modes.dark).toBe("Dark");

		const indonesianTheme = localizeThemeSelector("id");
		expect(indonesianTheme.heading).toBe("Tema");
		expect(indonesianTheme.modes.light).toBe("Terang");
		expect(indonesianTheme.modes.dark).toBe("Gelap");
	});

	it("falls back to defaultLocale translations for locales without direct entries", () => {
		const defaultTranslation = localizeThemeSelector(defaultLocale);
		const zhCnTheme = localizeThemeSelector("zh-CN" as Locale);

		expect(zhCnTheme).toEqual(defaultTranslation);
	});

	it("ensures modes object contains both light and dark keys", () => {
		const result = localizeThemeSelector("en");

		expect(result.modes).toBeDefined();
		expect(result.modes.light).toBeDefined();
		expect(result.modes.dark).toBeDefined();
		expect(typeof result.modes.light).toBe("string");
		expect(typeof result.modes.dark).toBe("string");
	});
});
