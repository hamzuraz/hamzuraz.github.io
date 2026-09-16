let controller: AbortController | undefined;

window.document.addEventListener("astro:page-load", () => {
	controller = new AbortController();
	const { signal } = controller;

	window.document.addEventListener(
		"click",
		(event) => {
			const element = event.target;
			if (!(element instanceof Element)) return;
			if (element.closest('details[name="header-dropdown"]')) return;

			window.document
				.querySelectorAll<HTMLDetailsElement>(
					'details[name="header-dropdown"][open]',
				)
				.forEach((dropdown) => {
					dropdown.open = false;
				});
		},
		{ signal },
	);
});

window.document.addEventListener("astro:before-swap", () => {
	if (controller) controller.abort();
});
