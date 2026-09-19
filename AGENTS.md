# Agent Instructions & Project Guide

## 1. Project Overview & Commands

Static portfolio site for Rifki Muhazzar ([hamzuraz.github.io](https://hamzuraz.github.io/)), built with Astro v7 (SSG with `<ClientRouter />`), Tailwind CSS v4, daisyUI v5 (`d-` prefix), and `@lucide/astro`. The project is managed exclusively with **Bun**; never use `npm`, `yarn`, or `pnpm`.

| Command                     | Description                                   |
| :-------------------------- | :-------------------------------------------- |
| `bun --bun run dev`         | Start the local Astro dev server              |
| `bun --bun run build`       | Build the static production output to `dist/` |
| `bun --bun run preview`     | Preview the production build locally          |
| `bun --bun run biome`       | Run Biome linting and auto-formatting         |
| `bun --bun run astro check` | Validate Astro and TypeScript diagnostics     |
| `bun --bun run commitlint`  | Verify commit message formatting              |

### Directory Layout

```
src/
├── assets/          # Static SVGs and image assets
├── components/      # UI components (footer/, head/, header/, home/, ui/)
├── data/            # Pure data sources (no styling or UI logic)
├── i18n/            # Routing helpers, dictionaries (en-US, id, ja), and types
├── layouts/         # BaseLayout.astro (HTML skeleton) and MainLayout.astro (wrapper)
├── middleware.ts    # Locale detection and Astro.locals injection
├── pages/           # 404.astro and [...lang]/ (index.astro, projects/)
├── scripts/         # Minimal client-side ES modules (clipboard, theme, dropdown)
├── styles/          # global.css and system/themes.css (Tailwind & daisyUI setup)
├── utils/           # Shared utilities (icon-props.ts)
└── env.d.ts         # Astro type declarations
```

Never edit generated output (`dist/`, `.astro/`) by hand.

## 2. Documentation & References

- **daisyUI v5**: Read `https://daisyui.com/llms.txt` before using a component class. Never guess class names.
- **Prefix requirement**: Always prefix daisyUI classes with `d-` (e.g., `d-btn`, `d-card`, `d-badge`, `d-menu`), as configured in `src/styles/system/themes.css`.

## 3. Language & Communication Rules

- **Chat with the developer**: Reply in the language the developer is using.
- **Codebase artifacts**: Use **English only** for all code, file and folder names, identifiers, code comments, commit messages, and technical documentation.
- **Ambiguity**: If a request is unclear or has several reasonable interpretations, ask a short clarifying question before making large changes.

## 4. Native-First & Simplicity Principles

- **The simplest solution wins**: Code should be readable at first glance. Avoid premature abstractions and layered configuration.
- **Minimal JavaScript**: Prefer native HTML and CSS (e.g., `<details>` for dropdowns, CSS `peer`/`:checked` states).
  - Add client-side JS only when a browser API strictly requires it (e.g., clipboard, storage).
- **No needless prop drilling**: Inline utility classes directly. Do not build multi-prop wrappers (e.g., one configurable dropdown for everything). Write concrete components instead; `<slot />` is allowed.
- **No unapproved dependencies**: Never add npm packages or alternative icon libraries without explicit user consent.
- **Accessibility by default**: Use semantic HTML, provide meaningful `alt` text, and add an `aria-label` to icon-only buttons and links.

## 5. Coding Conventions

- **File & folder naming**:
  - Components and layouts: `PascalCase.astro` (e.g., `ProjectCard.astro`, `BaseLayout.astro`).
  - Utilities, scripts, and data: `kebab-case.ts` (e.g., `icon-props.ts`, `theme.ts`).
- **Function style**: Use the `function` keyword for named functions. Use arrow functions when passing a function directly as an argument.
- **Path aliases**: Always import from `src/` with the `$/` alias (configured in `tsconfig.json`).
- **Icons**: Import only from `@lucide/astro` and spread the standardized props. Example:
  ```astro
  ---
  import { ArrowRight } from "@lucide/astro";
  import { iconProps } from "$/utils/icon-props";
  ---
  <ArrowRight {...iconProps} />
  ```
- **Adding pages**: Place new multilingual routes under `src/pages/[...lang]/`.
- **Localization**:
  - Read the language and translations through `Astro.locals.langCode` and `Astro.locals.t`.
  - Keep `src/data/` free of translations and UI classes.
  - When adding a user-facing string, add it to every dictionary (`en-US`, `id`, `ja`).
- **Client scripts (`src/scripts/`)**:
  - Must be ES modules; add `export type {};` to a file with no imports or exports so it is treated as a module.
  - Because the site uses `<ClientRouter />`, initialize DOM-dependent logic on the `astro:page-load` event so it still runs after client-side navigation.

## 6. Strict Anti-Patterns (What NOT to Do)

- ❌ Do not add `tailwind.config.js`. Tailwind v4 is configured in CSS (`@theme`, `@plugin`, etc.).
- ❌ Do not leak CSS or HTML markup into pure data files (`src/data/`).
- ❌ Do not use type assertions (`as`); use type guards or optional chaining instead.
- ❌ Do not create over-engineered wrapper components to handle slight design variations.
- ❌ Do not bypass Git hooks with `--no-verify`.

## 7. Agent Workflow

Follow this sequence for every change:

1. **Validation loop** (restart from the top after every fix):
   - `bun --bun run biome` (lint and format)
   - `bun --bun run astro check` (Astro and TypeScript validation)
   - Both must pass with **0 errors and 0 warnings**. If either fails, fix the root cause (do not disable rules or add `@ts-ignore` just to pass), then rerun both commands.
2. **User approval**:
   - Summarize the file changes status for the user.
   - **Never commit or push without an explicit user command.**
3. **Commit** (only when instructed):
   - Stage only the relevant files with `git add <files>`. Never use `git add .` or `git add -A`.
   - Use the Conventional Commits format with a scope whenever possible (e.g., `feat(header): add language switcher`).
   - Keep the subject line at 72 characters or fewer, and each body/footer line (both optional) at 100 characters or fewer.
4. **Push** (only when instructed):
   - Push only when the user explicitly asks for it.
   - Never force push unless the user specifically requests it.

If a Git hook fails, fix the issue, repeat step 1, then create a **new** commit. Never use `--no-verify` or `--amend`.
