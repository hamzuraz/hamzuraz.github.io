import { themes } from "@/data/themes";

const themeIds = themes.map<string>((theme) => theme.id);
const storageKey = "theme";
const root = document.documentElement;
const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

function systemTheme() {
	return mediaQuery.matches ? "default-dark" : "default-light";
}

function getStoredTheme() {
	try {
		const theme = localStorage.getItem(storageKey);
		if (!theme || !themeIds.includes(theme)) return null;
		return theme;
	} catch {
		return null;
	}
}

function applyTheme(theme: string) {
	root.dataset.theme = theme;

	const themeSelectors = document.querySelectorAll<HTMLElement>(
		"[data-theme-selector]",
	);

	themeSelectors.forEach((themeSelector) => {
		let selectedItem: HTMLElement | undefined;

		const items = themeSelector.querySelectorAll<HTMLElement>(
			'[role="menuitemradio"][data-theme-id]',
		);

		for (const item of items) {
			const isSelected = item.dataset.themeId === theme;
			item.setAttribute("aria-checked", String(isSelected));
			if (isSelected) selectedItem = item;
		}

		const themeName =
			themeSelector.querySelector<HTMLElement>("[data-theme-name]");
		const themeMode =
			themeSelector.querySelector<HTMLElement>("[data-theme-mode]");

		if (themeName && themeMode) {
			themeName.textContent = selectedItem?.dataset.themeName ?? "";
			themeMode.textContent = selectedItem?.dataset.themeMode ?? "";
		}
	});
}

applyTheme(root.dataset.theme ?? systemTheme());

document.addEventListener("click", (event) => {
	if (!(event.target instanceof Element)) return;

	const themeSelector = event.target.closest<HTMLElement>(
		"[data-theme-selector]",
	);
	if (!themeSelector) return;

	const item = event.target.closest<HTMLElement>(
		'[role="menuitemradio"][data-theme-id]',
	);
	const theme = item?.dataset.themeId;
	if (!theme) return;

	applyTheme(theme);
	try {
		localStorage.setItem(storageKey, theme);
	} catch {
		// Storage may be unavailable (private mode, quota, blocked).
		// The theme is already applied for this session.
		// It just won't persist across reloads.
	}
});

// OS THEME TRACKING
mediaQuery.addEventListener("change", () => {
	if (!getStoredTheme()) {
		applyTheme(systemTheme());
	}
});

// CROSS-TAB SYNC
addEventListener("storage", (event) => {
	if (
		event.key === storageKey &&
		event.newValue &&
		themeIds.includes(event.newValue)
	) {
		applyTheme(event.newValue);
		return;
	}
	if (!getStoredTheme()) applyTheme(systemTheme());
});
