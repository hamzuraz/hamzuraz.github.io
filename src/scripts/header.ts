window.document.addEventListener("click", (event) => {
	const target = event.target;
	if (!(target instanceof Node)) return;

	window.document.querySelectorAll("details[open]").forEach((details) => {
		if (!details.contains(target) && details instanceof HTMLDetailsElement) {
			details.open = false;
		}
	});
});
