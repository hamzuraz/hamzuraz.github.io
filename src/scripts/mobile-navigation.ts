function setMobileNavigationState(header: HTMLElement, isOpen: boolean) {
	const toggle = header.querySelector<HTMLButtonElement>(
		"button[data-mobile-navigation-toggle]",
	);
	const navigation = header.querySelector<HTMLElement>("#mobile-navigation");

	if (!toggle || !navigation) return;

	if (!isOpen && navigation.contains(document.activeElement)) {
		toggle.focus();
	}

	header.dataset.mobileNavigationOpen = String(isOpen);
	toggle.setAttribute("aria-expanded", String(isOpen));
	navigation.setAttribute("aria-hidden", String(!isOpen));
}

function getMobileNavigationHeader(element: Element) {
	return element.closest<HTMLElement>("header[data-mobile-navigation-open]");
}

document.addEventListener("click", (event) => {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const toggle = target.closest<HTMLButtonElement>(
		"button[data-mobile-navigation-toggle]",
	);
	if (toggle) {
		const header = getMobileNavigationHeader(toggle);
		if (!header) return;

		setMobileNavigationState(
			header,
			header.dataset.mobileNavigationOpen !== "true",
		);
		return;
	}

	const backdrop = target.closest<HTMLButtonElement>(
		"button[data-mobile-navigation-backdrop]",
	);
	if (backdrop) {
		const header = getMobileNavigationHeader(backdrop);
		if (header) setMobileNavigationState(header, false);
		return;
	}

	const navigationLink = target.closest<HTMLAnchorElement>(
		"#mobile-navigation a",
	);
	if (!navigationLink) return;

	const header = getMobileNavigationHeader(navigationLink);
	if (header) setMobileNavigationState(header, false);
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Escape") return;

	const header = document.querySelector<HTMLElement>(
		'header[data-mobile-navigation-open="true"]',
	);
	if (header) setMobileNavigationState(header, false);
});

document.addEventListener("astro:page-load", () => {
	document
		.querySelectorAll<HTMLElement>("header[data-mobile-navigation-open]")
		.forEach((header) => {
			setMobileNavigationState(header, false);
		});
});

export type {};
