const themeSelector = document.getElementById("theme-selector");
const storedTheme = localStorage.getItem("theme");

if (themeSelector instanceof HTMLSelectElement) {
	if (storedTheme === "light" || storedTheme === "dark") {
		themeSelector.value = storedTheme;
	}
}

export function setToSystemTheme() {
	const theme = localStorage.getItem("theme");
	const isInvalidTheme = theme !== "light" && theme !== "dark";

	return theme === "dark" ||
		(isInvalidTheme &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
		? "dark"
		: "light";
}

function changeTheme(value: string) {
	if (value === "system") {
		localStorage.removeItem("theme");
		document.documentElement.dataset.theme = setToSystemTheme();
	} else if (value === "light") {
		document.documentElement.dataset.theme = "light";
		localStorage.setItem("theme", "light");
	} else if (value === "dark") {
		document.documentElement.dataset.theme = "dark";
		localStorage.setItem("theme", "dark");
	}
}

if (themeSelector instanceof HTMLSelectElement) {
	themeSelector.addEventListener("change", (event) => {
		if (event.target instanceof HTMLSelectElement) {
			changeTheme(event.target.value);
		}
	});
}

matchMedia("(prefers-color-scheme: dark)").addEventListener(
	"change",
	(event) => {
		const theme = localStorage.getItem("theme");
		const isInvalidTheme = theme !== "light" && theme !== "dark";

		if (isInvalidTheme) {
			document.documentElement.dataset.theme = event.matches ? "dark" : "light";
		}
	},
);
