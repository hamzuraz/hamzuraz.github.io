import { themes } from "@/data/themes";

const storageKey = "theme";
const themeIds = themes.map((theme) => theme.id);
const root = document.documentElement;
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function systemTheme() {
	return mediaQuery.matches ? "default-dark" : "default-light";
}

const activeTheme = root.dataset.theme ?? systemTheme();

function getStoredTheme() {
	try {
		return window.localStorage.getItem(storageKey);
	} catch {
		return null;
	}
}

function applyTheme(theme: string) {
	root.dataset.theme = theme;

	const themeSelectors =
		document.querySelectorAll<HTMLDivElement>("#theme-selector");

	themeSelectors.forEach((themeSelector) => {
		let selectedItem: HTMLDivElement | undefined;
		const items = themeSelector.querySelectorAll<HTMLDivElement>(
			'[role="menuitemradio"]',
		);

		for (const item of items) {
			const isSelected = item.dataset.value === theme;
			item.setAttribute("aria-checked", String(isSelected));
			if (isSelected) selectedItem = item;
		}

		const themeName =
			themeSelector.querySelector<HTMLSpanElement>("[data-theme-name]");
		const themeMode =
			themeSelector.querySelector<HTMLSpanElement>("[data-theme-mode]");

		if (themeName && themeMode) {
			themeName.textContent = selectedItem?.dataset.themeName ?? "";
			themeMode.textContent = selectedItem?.dataset.themeMode ?? "";
		}
	});
}

applyTheme(activeTheme);

document.addEventListener("click", (event) => {
	if (!(event.target instanceof Element)) return;

	const themeSelector =
		event.target.closest<HTMLDivElement>("#theme-selector");
	if (!themeSelector) return;

	const item = event.target.closest<HTMLDivElement>(
		'[role="menuitemradio"][data-value]',
	);

	const theme = item?.dataset.value;
	if (!theme) return;

	if (theme === "reset") {
		applyTheme(systemTheme());
		try {
			window.localStorage.removeItem(storageKey);
		} catch {
			// Storage may be unavailable (private mode, quota, blocked).
		}
	} else {
		applyTheme(theme);
		try {
			window.localStorage.setItem(storageKey, theme);
		} catch {
			// Storage may be unavailable (private mode, quota, blocked).
			// The theme is already applied for this session.
			// It just won't persist across reloads.
		}
	}
});

// CROSS-TAB SYNC
window.addEventListener("storage", (event) => {
	if (event.key !== storageKey) return;

	if (event.newValue === null) {
		applyTheme(systemTheme());
		return;
	}

	if (themeIds.includes(event.newValue)) {
		applyTheme(event.newValue);
	}
});

// OS THEME TRACKING
mediaQuery.addEventListener("change", () => {
	if (!getStoredTheme()) {
		applyTheme(systemTheme());
	}
});
