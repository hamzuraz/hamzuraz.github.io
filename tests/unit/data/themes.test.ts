import { describe, expect, it } from "bun:test";
import { themes } from "@/data/themes";

describe("Data: themes registry", () => {
	it("contains unique theme IDs without any duplicates", () => {
		const ids = themes.map((t) => t.id);
		const uniqueIds = new Set(ids);

		expect(uniqueIds.size).toBe(ids.length);
	});

	it("ensures all themes have valid modes ('Light' or 'Dark')", () => {
		for (const theme of themes) {
			expect(["Light", "Dark"]).toContain(theme.mode);
		}
	});

	it("includes default themes required by fallback system", () => {
		const ids = themes.map((t) => t.id);

		expect(ids).toContain("default-light");
		expect(ids).toContain("default-dark");
	});

	it("has non-empty names and IDs for all registered themes", () => {
		for (const theme of themes) {
			expect(theme.id.trim().length).toBeGreaterThan(0);
			expect(theme.name.trim().length).toBeGreaterThan(0);
		}
	});
});
