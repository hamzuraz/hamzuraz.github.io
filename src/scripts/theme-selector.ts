const themeActiveElements = document.querySelectorAll<HTMLElement>(
	"[data-theme-active]",
);
const themeSelectorElements = document.querySelectorAll<HTMLUListElement>(
	"[data-theme-selector]",
);
const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

const storedTheme = localStorage.getItem("theme");

const updateThemeLabels = (theme: string) => {
	for (const themeActive of themeActiveElements) {
		themeActive.textContent = theme;
	}
};

if (storedTheme === "light" || storedTheme === "dark") {
	updateThemeLabels(storedTheme);
}

for (const themeSelector of themeSelectorElements) {
	themeSelector.addEventListener("click", (event) => {
		const element = event.target;
		if (!(element instanceof HTMLElement)) return;

		const link = element.closest<HTMLAnchorElement>("a[data-theme-value]");
		if (!link) return;

		event.preventDefault();

		const themeValue = link.dataset.themeValue;

		switch (themeValue) {
			case "system":
				localStorage.removeItem("theme");
				document.documentElement.removeAttribute("data-theme");
				updateThemeLabels("System");
				break;
			case "light":
				localStorage.setItem("theme", "light");
				document.documentElement.setAttribute("data-theme", "light");
				updateThemeLabels("light");
				break;
			case "dark":
				localStorage.setItem("theme", "dark");
				document.documentElement.setAttribute("data-theme", "dark");
				updateThemeLabels("dark");
				break;
		}
	});
}

mediaQuery.addEventListener("change", (event) => {
	const theme = localStorage.getItem("theme");
	const isInvalidTheme = theme !== "light" && theme !== "dark";

	if (isInvalidTheme) {
		document.documentElement.setAttribute(
			"data-theme",
			event.matches ? "dark" : "light",
		);
	}
});
