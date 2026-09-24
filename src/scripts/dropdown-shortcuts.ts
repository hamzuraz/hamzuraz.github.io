function isTypingTarget(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) return false;

	return (
		target.isContentEditable || target.matches("input, select, textarea")
	);
}

document.addEventListener("keydown", (event) => {
	if (
		event.defaultPrevented ||
		event.altKey ||
		event.ctrlKey ||
		event.metaKey ||
		event.repeat ||
		isTypingTarget(event.target)
	) {
		return;
	}

	const shortcut = event.key.toLowerCase();
	const trigger = Array.from(
		document.querySelectorAll<HTMLButtonElement>("[data-shortcut]"),
	).find((button) => button.dataset.shortcut === shortcut);

	if (!trigger) return;

	event.preventDefault();
	trigger.click();
	trigger.focus();
});
