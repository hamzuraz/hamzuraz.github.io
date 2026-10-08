type ToastCategory = "error" | "warning" | "info" | "success";

interface ToastConfig {
	category: ToastCategory;
	title: string;
	description: string;
}

interface ToastElement extends HTMLElement {
	toast?: (config: ToastConfig) => HTMLElement;
	close: () => void;
}

export function showToast(config: ToastConfig) {
	const toaster = document.getElementById("toaster") as ToastElement | null;

	if (!toaster?.toast) {
		console.error("Basecoat toaster is not ready.");
		return;
	}

	const visibleToasts = toaster.querySelectorAll<ToastElement>(
		".toast:not([aria-hidden='true'])",
	);

	if (visibleToasts.length >= 3) visibleToasts[0].close();
	toaster.toast(config);
}
