function isTypingTarget(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) return false;

	return (
		target.isContentEditable || target.matches("input, select, textarea")
	);
}

function isElementVisible(element: HTMLElement) {
	return !!(
		element.offsetWidth ||
		element.offsetHeight ||
		element.getClientRects().length
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
	const triggers = Array.from(
		document.querySelectorAll<HTMLElement>(
			`[data-shortcut="${CSS.escape(shortcut)}"]`,
		),
	);

	if (triggers.length === 0) return;

	const trigger = triggers.find(isElementVisible);

	if (!trigger) return;

	event.preventDefault();
	trigger.focus();
	trigger.click();
});

export {};
