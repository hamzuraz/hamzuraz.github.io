window.document.addEventListener("click", (event) => {
	const target = event.target;
	if (!(target instanceof Node)) return;

	const detailsOpenElements =
		window.document.querySelectorAll<HTMLDetailsElement>("details[open]");
	if (detailsOpenElements.length === 0) return;

	detailsOpenElements.forEach((details) => {
		if (!details.contains(target)) {
			details.open = false;
		}
	});
});
