const activeTimers = new WeakMap<HTMLButtonElement, number>();
let controller: AbortController | undefined;

async function copyToClipboard(text: string): Promise<boolean> {
	if (navigator.clipboard && window.isSecureContext) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			// Fallback to execCommand
		}
	}

	try {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed";
		textArea.style.left = "-999999px";
		textArea.style.top = "-999999px";
		textArea.setAttribute("aria-hidden", "true");
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		const exec = (
			document as Document & {
				execCommand?: (command: string) => boolean;
			}
		).execCommand;
		const successful =
			typeof exec === "function" ? exec.call(document, "copy") : false;
		textArea.remove();
		return Boolean(successful);
	} catch {
		return false;
	}
}

function announceLive(message: string) {
	const announcer = document.getElementById("contact-live-announcer");
	if (announcer) {
		announcer.textContent = message;
	}
}

function resetCopyState(
	button: HTMLButtonElement,
	tooltip: HTMLElement | null,
	copyIcon: SVGElement | null,
	checkIcon: SVGElement | null,
	originalTip: string,
) {
	if (copyIcon) copyIcon.classList.remove("hidden");
	if (checkIcon) checkIcon.classList.add("hidden");
	if (tooltip) {
		tooltip.setAttribute("data-tip", originalTip);
		tooltip.classList.remove("d-tooltip-open", "d-tooltip-success");
	}
	button.classList.remove("text-success", "border-success");
	activeTimers.delete(button);
}

async function handleCopyClick(button: HTMLButtonElement) {
	const value = button.getAttribute("data-copy-value");
	if (!value) return;

	const copied = await copyToClipboard(value);
	if (!copied) return;

	const tooltip = button.closest<HTMLElement>("[data-copy-tooltip]");
	const copyIcon = button.querySelector<SVGElement>(".copy-icon");
	const checkIcon = button.querySelector<SVGElement>(".check-icon");
	const copiedTip = button.getAttribute("data-copied-tip") || "Copied!";

	if (!button.hasAttribute("data-original-tip") && tooltip) {
		button.setAttribute(
			"data-original-tip",
			tooltip.getAttribute("data-tip") || "",
		);
	}
	const originalTip = button.getAttribute("data-original-tip") || "";

	const existingTimer = activeTimers.get(button);
	if (existingTimer !== undefined) {
		window.clearTimeout(existingTimer);
	}

	if (copyIcon) copyIcon.classList.add("hidden");
	if (checkIcon) checkIcon.classList.remove("hidden");
	if (tooltip) {
		tooltip.setAttribute("data-tip", copiedTip);
		tooltip.classList.add("d-tooltip-open", "d-tooltip-success");
	}
	button.classList.add("text-success", "border-success");

	announceLive(copiedTip);

	const timer = window.setTimeout(() => {
		resetCopyState(button, tooltip, copyIcon, checkIcon, originalTip);
	}, 2000);

	activeTimers.set(button, timer);
}

window.document.addEventListener("astro:page-load", () => {
	controller = new AbortController();
	const { signal } = controller;

	document.addEventListener(
		"click",
		(event) => {
			const target = event.target;
			if (!(target instanceof Element)) return;
			const button = target.closest<HTMLButtonElement>(
				"button[data-copy-button]",
			);
			if (!button) return;
			handleCopyClick(button);
		},
		{ signal },
	);
});

window.document.addEventListener("astro:before-swap", () => {
	if (controller) controller.abort();
});

export type {};
