import "basecoat-css/basecoat";
import "basecoat-css/drawer";
import "basecoat-css/dropdown-menu";
import "basecoat-css/tabs";
import "basecoat-css/toast";

declare const basecoat: {
	initAll: () => void;
};

document.addEventListener("astro:after-swap", basecoat.initAll);
