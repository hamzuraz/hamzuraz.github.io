function updateCurrentYear() {
	const currentYear = document.querySelector<HTMLElement>(
		"[data-current-year]",
	);

	if (currentYear) {
		currentYear.textContent = String(new Date().getFullYear());
	}
}

updateCurrentYear();
document.addEventListener("astro:after-swap", updateCurrentYear);
