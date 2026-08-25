const themeActive = document.getElementById("theme-active");
const themeSelector = document.getElementById("theme-selector");
const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

const storedTheme = localStorage.getItem("theme");

if (themeActive instanceof HTMLSpanElement) {
	if (storedTheme === "light" || storedTheme === "dark") {
		themeActive.textContent = storedTheme;
	}
}

if (themeSelector instanceof HTMLUListElement) {
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
				break;
			case "light":
				localStorage.setItem("theme", "light");
				document.documentElement.setAttribute("data-theme", "light");
				break;
			case "dark":
				localStorage.setItem("theme", "dark");
				document.documentElement.setAttribute("data-theme", "dark");
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
