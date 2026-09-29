const copyButtons =
	document.querySelectorAll<HTMLButtonElement>("[data-copy-value]");

copyButtons.forEach((button) => {
	button.addEventListener("click", async () => {
		const value = button.dataset.copyValue;
		if (!value) return;

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
			console.error("Failed to copy");
		}
	});
});

export {};
