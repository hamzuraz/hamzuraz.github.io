document.documentElement.dataset.theme =
	localStorage.theme === "dark" ||
	(!("theme" in localStorage) &&
		window.matchMedia("(prefers-color-scheme: dark)").matches)
		? "dark"
		: "light";
