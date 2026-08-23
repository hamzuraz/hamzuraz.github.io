import { defineMiddleware } from "astro:middleware";
import { getLangCodeFromPathname, useTranslations } from "$/i18n/utils.ts";

export const onRequest = defineMiddleware((context, next) => {
	const langCode = getLangCodeFromPathname(context.url.pathname);

	context.locals.langCode = langCode;
	context.locals.t = useTranslations(langCode);

	return next();
});
