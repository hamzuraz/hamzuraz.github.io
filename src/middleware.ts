import { defineMiddleware } from "astro:middleware";
import { getLangFromPathname, useTranslations } from "$/i18n/utils.ts";

export const onRequest = defineMiddleware((context, next) => {
	const lang = getLangFromPathname(context.url.pathname);

	context.locals.lang = lang;
	context.locals.t = useTranslations(lang);

	return next();
});
