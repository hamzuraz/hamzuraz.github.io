const themeSelect = document.getElementById("themeSelect");

function changeTheme(value: string) {
	if (value === "system") {
		localStorage.removeItem("theme");
		document.documentElement.dataset.theme =
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
				? "dark"
				: "light";
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
