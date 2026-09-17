document.addEventListener("click", async (event) => {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const button = target.closest<HTMLButtonElement>(
		"button[data-copy-button]",
	);
	if (!button) return;

	const value = button.getAttribute("data-copy-value");
	if (!value) return;

	try {
		await navigator.clipboard.writeText(value);
	} catch {
		return;
	}

	const tooltip = button.closest<HTMLElement>("[data-copy-tooltip]");
	const copyIcon = button.querySelector(".copy-icon");
	const checkIcon = button.querySelector(".check-icon");

	copyIcon?.classList.add("hidden");
	checkIcon?.classList.remove("hidden");
	button.classList.add("text-success", "border-success");
	tooltip?.classList.add("d-tooltip-open");

	window.setTimeout(() => {
		copyIcon?.classList.remove("hidden");
		checkIcon?.classList.add("hidden");
		button.classList.remove("text-success", "border-success");
		tooltip?.classList.remove("d-tooltip-open");
	}, 2000);
});

export type {};
