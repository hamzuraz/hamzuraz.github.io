## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Coding Guidelines

- When creating a function, prioritize using the `function` keyword when possible.
- When a function is passed directly as an argument, prioritize using an arrow function.

## Styling

- This project uses Tailwind CSS v4 with the `@tailwindcss/vite` plugin.
- Use Tailwind CSS v4's CSS-first configuration with directives such as `@theme`, `@plugin`, and `@custom-variant`.
- This project uses daisyUI v5. Its configuration is in `src/styles/system/themes.css`.
- Prefix every daisyUI component and modifier class with `d-`, such as `d-btn`, `d-menu`, and `d-dropdown`. Tailwind utility classes remain unprefixed.
- When creating or styling a component, first look for a suitable daisyUI component in the official documentation at https://daisyui.com/components/. Use and adapt that component with Tailwind CSS v4 utilities as needed; only build the component with Tailwind CSS v4 utilities when no suitable daisyUI component exists.

## Design System & Tokens

All global app styles and design tokens should be referenced from [src/styles/global.css](src/styles/global.css) and the token files in [src/styles/system/](src/styles/system/).

- **Global Styles:** [src/styles/global.css](src/styles/global.css)
- **Breakpoints:** [src/styles/system/breakpoints.css](src/styles/system/breakpoints.css)
- **Spacing & Sizing:** [src/styles/system/spacing-and-sizing.css](src/styles/system/spacing-and-sizing.css)
- **Themes:** [src/styles/system/themes.css](src/styles/system/themes.css)
- **Typography:** [src/styles/system/typography/typography.css](src/styles/system/typography/typography.css)
- **Excluded files (treat as non-existent):** any file in [src/styles/system/](src/styles/system/) whose name starts with `_` (for example, `_colors.css`, `_borders.css`, `_effects.css`) is unused and not part of the codebase in practice. These files should not be referenced, imported, or considered in any way — behave as though they do not exist.