import { themeOptions } from "$/i18n/ui";
import { getLangCodeFromPathname } from "$/i18n/utils";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = Exclude<ThemePreference, "system">;

function isThemePreference(
	value: string | undefined,
): value is ThemePreference {
	return value === "system" || value === "light" || value === "dark";
}

function isResolvedTheme(value: string | null): value is ResolvedTheme {
	return value === "light" || value === "dark";
}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function resolveTheme(theme: ThemePreference): ResolvedTheme {
	return theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
}

function getStoredTheme(): ThemePreference {
	const storedTheme = window.localStorage.getItem("theme");

	if (isResolvedTheme(storedTheme)) return storedTheme;
	if (storedTheme !== null) window.localStorage.removeItem("theme");

	return "system";
}

let controller: AbortController | undefined;

window.document.addEventListener("astro:page-load", () => {
	controller = new AbortController();
	const { signal } = controller;

	const themeActiveTextElements =
		window.document.querySelectorAll<HTMLSpanElement>(
			"span[data-theme-active-text]",
		);
	const themeMenuElements = window.document.querySelectorAll<HTMLUListElement>(
		"ul[data-theme-menu]",
	);

	function updateThemeLabel(theme: ThemePreference) {
		const langCode = getLangCodeFromPathname(window.location.pathname);
		themeActiveTextElements.forEach((element) => {
			element.textContent = themeOptions[langCode][theme];
			element.classList.remove("invisible");
		});
	}

	function applyTheme(theme: ThemePreference) {
		const themeValue = resolveTheme(theme);
		window.document.documentElement.dataset.theme = themeValue;
		updateThemeLabel(theme);
	}

	applyTheme(getStoredTheme());

	themeMenuElements.forEach((list) => {
		list.addEventListener(
			"click",
			(event) => {
				const element = event.target;
				if (!(element instanceof Element)) return;

				const themeValueElement = element.closest<HTMLAnchorElement>(
					"a[data-theme-value]",
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
			},
			{ signal },
		);
	});

	mediaQuery.addEventListener(
		"change",
		() => {
			if (getStoredTheme() === "system") applyTheme("system");
		},
		{ signal },
	);

	window.addEventListener(
		"storage",
		(event) => {
			if (event.key !== "theme") return;
			applyTheme(getStoredTheme());
		},
		{ signal },
	);
});

window.document.addEventListener("astro:before-swap", () => {
	controller?.abort();
});
