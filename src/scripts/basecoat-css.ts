import "basecoat-css/basecoat";
import "basecoat-css/drawer";
import "basecoat-css/dropdown-menu";
import "basecoat-css/tabs";

declare const basecoat: {
	initAll: () => void;
};

document.addEventListener("astro:after-swap", basecoat.initAll);
