document.addEventListener("click", (event) => {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const navigationLink = target.closest<HTMLAnchorElement>(
		"#mobile-navigation a",
	);
	if (!navigationLink) return;

	navigationLink.closest<HTMLElement>("#mobile-navigation")?.hidePopover();
});

export type {};
