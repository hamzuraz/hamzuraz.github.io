const themeCurrentText = window.document.getElementById("theme-current-text");
const themeList = window.document.getElementById("theme-list");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = Exclude<ThemePreference, "system">;

function isThemePreference(value: string | null): value is ThemePreference {
	return value === "system" || value === "light" || value === "dark";
}

function isResolvedTheme(value: string | null): value is ResolvedTheme {
	return value === "light" || value === "dark";
}

function resolveTheme(theme: ThemePreference): ResolvedTheme {
	return theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
}

function updateThemeLabel(theme: string) {
	if (themeCurrentText instanceof HTMLSpanElement) {
		themeCurrentText.textContent = theme;
	}
}

function getStoredTheme(): ThemePreference {
	const storedTheme = window.localStorage.getItem("theme");

	if (isResolvedTheme(storedTheme)) return storedTheme;
	if (storedTheme !== null) window.localStorage.removeItem("theme");

	return "system";
}

function applyTheme(theme: ThemePreference) {
	const themeValue = resolveTheme(theme);
	window.document.documentElement.setAttribute("data-theme", themeValue);
	updateThemeLabel(theme);
}

applyTheme(getStoredTheme());

if (themeList instanceof HTMLUListElement) {
	themeList.addEventListener("click", (event) => {
		const element = event.target;
		if (!(element instanceof Element)) return;

		const themeValueElement = element.closest<HTMLAnchorElement>(
			"a[data-theme-value]",
		);
		if (!themeValueElement) return;

		event.preventDefault();

		const themeValue = themeValueElement.getAttribute("data-theme-value");
		if (!isThemePreference(themeValue)) return;

		if (themeValue === "system") {
			window.localStorage.removeItem("theme");
		} else {
			window.localStorage.setItem("theme", themeValue);
		}

		applyTheme(themeValue);
	});
}

mediaQuery.addEventListener("change", () => {
	if (getStoredTheme() === "system") applyTheme("system");
});

window.addEventListener("storage", (event) => {
	if (event.key !== "theme") return;
	applyTheme(getStoredTheme());
});
