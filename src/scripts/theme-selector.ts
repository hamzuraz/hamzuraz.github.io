const themeActiveElements = document.querySelectorAll<HTMLElement>(
	"[data-theme-active]",
);
const themeSelectorElements = document.querySelectorAll<HTMLUListElement>(
	"[data-theme-selector]",
);
const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = Exclude<ThemePreference, "system">;

function isThemePreference(value: string | null): value is ResolvedTheme {
	return value === "light" || value === "dark";
}

function isThemeSelection(value: string | undefined): value is ThemePreference {
	return value === "system" || value === "light" || value === "dark";
}

function updateThemeLabels(theme: string) {
	for (const themeActive of themeActiveElements) {
		themeActive.textContent = theme;
	}
}

function getStoredTheme(): ThemePreference {
	const storedTheme = localStorage.getItem("theme");

	if (isThemePreference(storedTheme)) return storedTheme;
	if (storedTheme !== null) localStorage.removeItem("theme");

	return "system";
}

function resolveTheme(theme: ThemePreference): ResolvedTheme {
	return theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
}

function applyTheme(theme: ThemePreference) {
	document.documentElement.setAttribute("data-theme", resolveTheme(theme));
	updateThemeLabels(theme === "system" ? "System" : theme);
}

applyTheme(getStoredTheme());

for (const themeSelector of themeSelectorElements) {
	themeSelector.addEventListener("click", (event) => {
		const element = event.target;
		if (!(element instanceof Element)) return;

		const link = element.closest<HTMLAnchorElement>("a[data-theme-value]");
		if (!link) return;

		event.preventDefault();

		const themeValue = link.dataset.themeValue;
		if (!isThemeSelection(themeValue)) return;

		if (themeValue === "system") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", themeValue);
		}

		applyTheme(themeValue);
	});
}

mediaQuery.addEventListener("change", () => {
	if (getStoredTheme() === "system") {
		applyTheme("system");
	}
});

window.addEventListener("storage", (event) => {
	if (event.key !== "theme") return;
	applyTheme(getStoredTheme());
});
