import { showToast } from "@/scripts/toast";

document.addEventListener("click", async (event) => {
	if (!(event.target instanceof Element)) return;

	const button = event.target.closest<HTMLElement>("[data-copy-value]");
	const value = button?.dataset.copyValue;
	if (!button || !value) return;

	try {
		await navigator.clipboard.writeText(value);
		const copyIcon = button.querySelector("[data-copy-icon]");
		const checkIcon = button.querySelector("[data-check-icon]");

		if (copyIcon && checkIcon) {
			copyIcon.classList.add("hidden");
			checkIcon.classList.remove("hidden");

			setTimeout(() => {
				copyIcon.classList.remove("hidden");
				checkIcon.classList.add("hidden");
			}, 2000);
		}
	} catch {
		showToast({
			category: "error",
			title: "Could not copy contact details",
			description:
				"Clipboard access was denied. Please copy the contact information manually.",
		});
	}
});
