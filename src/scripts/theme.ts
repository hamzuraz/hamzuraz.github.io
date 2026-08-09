interface Storage { theme: string }

const themeSelect = document.getElementById("themeSelect");
const theme = localStorage.theme

if (theme === "light" || theme === "dark") {
	if (themeSelect instanceof HTMLSelectElement) {
		themeSelect.value = theme
	}
}

function getValueInLocalStorage() {
	return localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
		? "dark"
		: "light";
}

function changeTheme(value: string) {
	if (value === "system") {
		localStorage.removeItem("theme");
		document.documentElement.dataset.theme = getValueInLocalStorage()
	} else if (value === "light") {
		document.documentElement.dataset.theme = "light";
		localStorage.theme = "light";
	} else if (value === "dark") {
		document.documentElement.dataset.theme = "dark";
		localStorage.theme = "dark";
	}
}

themeSelect?.addEventListener("change", (event: Event) => {
	if (event.target instanceof HTMLSelectElement) {
		changeTheme(event.target.value);
	}
});
