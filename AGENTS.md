## Documentation

Full documentation: [docs.astro.build](https://docs.astro.build/)

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
- Use Tailwind CSS v4's CSS-first configuration with directives such as `@theme`, `@plugin`, `@custom-variant`, etc.
- This project uses daisyUI v5. Its configuration is in [src/styles/system/themes.css](src/styles/system/themes.css).
- Prefix every daisyUI component and modifier class with `d-`, such as `d-btn`, `d-menu`, `d-dropdown`, etc. Tailwind utility classes remain unprefixed.
- When creating or styling a component, first look for a suitable daisyUI component in the [official documentation](https://daisyui.com/llms.txt). Use and adapt that component with Tailwind CSS v4 utilities as needed; only build the component with Tailwind CSS v4 utilities from scratch when no suitable daisyUI component exists.
- [src/styles/adaptive-utilities.css](src/styles/adaptive-utilities.css) contains shared responsive utility patterns defined with Tailwind v4 `@utility`. These utilities centralize repeated `sm:`, `dark:`, and hover/state logic so components stay consistent and easier to maintain.
- Prefer using the existing adaptive utilities before creating ad hoc responsive classes in markup, especially for spacing, typography, icon sizing, and subtle theme colors.
- Reusable utilities already defined in this file include `a-container-padding`, `a-icon-link`, `a-text-small`, `a-text-medium`, `a-text-large`, `a-text-larger`, `a-text-largest`, `a-border-subtle`, and `a-text-subtle`.
- Keep token definitions in [src/styles/system](src/styles/system); only add new reusable responsive utilities to [src/styles/adaptive-utilities.css](src/styles/adaptive-utilities.css) when the pattern is used across multiple components or pages.
- All global app styles and design tokens should be referenced from [src/styles/global.css](src/styles/global.css) and the token files in [src/styles/system](src/styles/system).
- **Excluded files (treat as non-existent):** any file in [src/styles/system](src/styles/system) whose name starts with `_` (for example, `_colors.css`, `_borders.css`, and `_effects.css`) is unused and not part of the codebase in practice. These files should not be referenced, imported, or considered in any way — behave as though they do not exist.