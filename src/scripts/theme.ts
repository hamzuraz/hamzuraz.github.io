// REQUIRED: Theme selector and persistence
const storageKey = "theme";
const root = document.documentElement;
const selector = document.querySelector<HTMLDivElement>("#theme-selector");
const input = selector?.querySelector<HTMLInputElement>('input[type="hidden"]');

if (selector) {
	const activeTheme = root.dataset.theme ?? "default-light";

	selector.addEventListener("change", (event) => {
		if (!(event instanceof CustomEvent)) return;

		const theme = event.detail.value;
		if (typeof theme !== "string") return;

		root.dataset.theme = theme;

		try {
			window.localStorage.setItem(storageKey, theme);
		} catch {
			// Storage may be unavailable (private mode, quota, blocked).
			// The theme is already applied for this session.
			// It just won't persist across reloads.
		}
	});

	if (input) input.value = activeTheme;
}

// OPTIONAL: Cross-tab sync and OS theme tracking
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme: string) {
	root.dataset.theme = theme;
	if (input) input.value = theme;
}

function systemTheme() {
	return mediaQuery.matches ? "default-dark" : "default-light";
}

function getStoredTheme() {
	try {
		return window.localStorage.getItem(storageKey);
	} catch {
		return null;
	}
}

// Cross-tab sync
window.addEventListener("storage", (event) => {
	if (event.key === storageKey) {
		applyTheme(event.newValue ?? systemTheme());
	}
});

// OS theme tracking: theme changes only follow the OS if the user has not
// picked a theme manually (i.e., the theme is not stored in local storage).
mediaQuery.addEventListener("change", () => {
	if (getStoredTheme()) return;
	applyTheme(systemTheme());
});

export {};
