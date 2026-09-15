## Project Setup

- Package manager: **bun** (not npm/pnpm/yarn). See [package.json](package.json) for full dependency list and scripts.
- Icons: use `@lucide/astro` for icons; do not introduce another icon library.

## AI Workflow

- After adding, editing, or deleting any file or code, always run `bun --bun run biome`.
- If it fails, fix the issues and re-run until it passes.
- Once biome passes, run `bun --bun run astro check`.
- If it fails, fix the issues and re-run until it passes.
- Once both pass, stop there — do not continue further; the user will take over from that point.

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

- Prefer the `function` keyword when declaring named functions.
- Prefer arrow functions when a function is passed directly as an argument

## Styling

### Framework & Configuration

- This project uses Tailwind CSS v4 with the `@tailwindcss/vite` plugin.
- Use Tailwind CSS v4's CSS-first configuration approach (e.g., `@theme`, `@plugin`, `@custom-variant`).
- This project uses daisyUI v5, configured in [src/styles/system/themes.css](src/styles/system/themes.css).
- Prefix every daisyUI class with `d-` (e.g., `d-btn`, `d-menu`, `d-dropdown`). Tailwind utility classes remain unprefixed.

### Component Development

- When creating or styling a component, first check the [daisyUI documentation](https://daisyui.com/llms.txt) for a suitable existing component.
- Adapt that component using Tailwind CSS v4 utilities as needed.
- Only build a component from scratch with Tailwind utilities when no suitable daisyUI component exists.

### Responsive Utilities

- [src/styles/responsive-utilities.css](src/styles/responsive-utilities.css) contains shared responsive utility patterns defined with Tailwind v4's `@utility` directive. These centralize repeated `sm:`, `dark:`, and hover/state logic so components stay consistent and easier to maintain.
- Prefer these existing utilities over ad hoc responsive classes in markup, especially for spacing, typography, icon sizing, and subtle theme colors.
- Existing reusable utilities include: `r-container-padding`, `r-icon-link`, `r-text-small`, `r-text-medium`, `r-text-large`, `r-text-larger`, `r-text-largest`, `r-border-subtle`, and `r-text-subtle`.
- Only add new reusable utilities to `responsive-utilities.css` when a pattern is used across multiple components or pages; keep token definitions in [src/styles/system](src/styles/system).

### Global Styles & Tokens

- All global app styles and design tokens should be referenced from [src/styles/global.css](src/styles/global.css) and the token files in [src/styles/system](src/styles/system).
- **Excluded files (treat as non-existent):** any file in [src/styles/system](src/styles/system) whose name starts with `_` (e.g., `_colors.css`, `_borders.css`, `_effects.css`) is unused and not part of the codebase in practice. Do not reference, import, or otherwise consider these files — treat them as if they don't exist.
