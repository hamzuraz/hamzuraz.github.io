type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function isThemePreference(
	value: string | undefined,
): value is ThemePreference {
	return value === "system" || value === "light" || value === "dark";
}

function resolveTheme(theme: ThemePreference): ResolvedTheme {
	return theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
}

function getStoredTheme(): ThemePreference {
	const theme = window.localStorage.getItem("theme");
	if (theme === "light" || theme === "dark") return theme;
	if (theme !== null) window.localStorage.removeItem("theme");
	return "system";
}

function updateThemeLabel(theme: ThemePreference) {
	const matchingOption = document.querySelector<HTMLElement>(
		`span[data-theme-value="${theme}"]`,
	);
	const labelText = matchingOption?.textContent?.trim() || theme;

	const themeActiveTextElements = document.querySelectorAll<HTMLSpanElement>(
		"span[data-theme-active-text]",
	);
	themeActiveTextElements.forEach((element) => {
		element.textContent = labelText;
		element.classList.remove("invisible");
	});
}

function applyTheme(theme: ThemePreference) {
	document.documentElement.dataset.theme = resolveTheme(theme);
	updateThemeLabel(theme);
}

// Delegated click handler for theme selector items
document.addEventListener("click", (event) => {
	const element = event.target;
	if (!(element instanceof Element)) return;

	const themeValueElement = element.closest<HTMLElement>(
		"span[data-theme-value]",
	);
	if (!themeValueElement) return;

	event.preventDefault();

	const themeValue = themeValueElement.dataset.themeValue;
	if (!isThemePreference(themeValue)) return;

	if (themeValue === "system") {
		window.localStorage.removeItem("theme");
	} else {
		window.localStorage.setItem("theme", themeValue);
	}

	applyTheme(themeValue);
});

// Update theme if system preferences change
mediaQuery.addEventListener("change", () => {
	if (getStoredTheme() === "system") {
		applyTheme("system");
	}
});

// Sync across browser tabs
window.addEventListener("storage", (event) => {
	if (event.key === "theme") {
		applyTheme(getStoredTheme());
	}
});

// Apply theme on Astro page loads
document.addEventListener("astro:page-load", () => {
	applyTheme(getStoredTheme());
});

export type {};
