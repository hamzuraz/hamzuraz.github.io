document.addEventListener("click", (event) => {
	const target = event.target as Node;
	if (!target) return;

	document.querySelectorAll("details[open]").forEach((details) => {
		if (!details.contains(target)) {
			(details as HTMLDetailsElement).open = false;
		}
	});
});
