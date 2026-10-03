const currentYearElement = document.querySelector<HTMLElement>(
	"[data-current-year]",
);

if (currentYearElement) {
	currentYearElement.textContent = String(new Date().getFullYear());
}
