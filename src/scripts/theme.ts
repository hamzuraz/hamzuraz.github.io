const storageKey = "theme";
const selector = document.querySelector("#theme-selector");
const root = document.documentElement;

if (selector instanceof HTMLElement) {
	const input = selector.querySelector('input[type="hidden"]');
	const activeTheme = root.dataset.theme ?? "default-light";

	selector.addEventListener("change", (event) => {
		const theme = (event as CustomEvent<{ value: string }>).detail.value;

		root.dataset.theme = theme;

		try {
			window.localStorage.setItem(storageKey, theme);
		} catch {
			// The active-page switch still works when storage is unavailable.
		}
	});

	if (input instanceof HTMLInputElement) {
		input.value = activeTheme;
	}
}
