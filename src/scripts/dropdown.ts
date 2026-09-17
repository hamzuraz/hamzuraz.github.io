document.addEventListener("click", (event) => {
	const element = event.target;
	if (!(element instanceof Element)) return;
	if (element.closest("details[data-dropdown]")) return;

	document
		.querySelectorAll<HTMLDetailsElement>("details[data-dropdown][open]")
		.forEach((dropdown) => {
			dropdown.open = false;
		});
});

export type {};
