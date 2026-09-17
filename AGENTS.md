# Agent Instructions & Project Guide

## Project Overview

- **Purpose**: Personal portfolio and showcase site for Rifki Muhazzar, statically hosted at [hamzuraz.github.io](https://hamzuraz.github.io/).
- **Package manager**: **bun** (not npm/pnpm/yarn). See [package.json](package.json) for full dependency list and scripts.
- **Framework**: Astro v7 with static output (`output: "static"`).
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) and daisyUI v5.
- **Icons**: Use `@lucide/astro` for icons; do not introduce another icon library.
- **Internationalization**: Custom multilingual routing supporting English (`en-US`), Indonesian (`id`), and Japanese (`ja`).

---

## Directory Structure

```
src/
├── assets/          # Static project assets
├── components/
│   ├── common/      # Shared interface components
│   ├── footer/      # Footer-related components
│   ├── head/        # Document head components
│   ├── header/      # Header and navigation components
│   └── home/        # Home page components
├── data/            # Structured application data
├── i18n/            # Localization resources and helpers
├── layouts/         # Page layout components
├── pages/           # Application routes and page components
├── scripts/         # Client-side behavior and interactions
├── styles/          # Global styles and design system definitions
├── utils/           # Shared utility functions, objects, and types
└── env.d.ts         # Application-wide type declarations
```

---

## Commands

Always use `bun` to run scripts and package commands:

| Task              | Command                     | Description                                     |
| ----------------- | --------------------------- | ----------------------------------------------- |
| **Development**   | `bun --bun run dev`         | Starts local development server                 |
| **Build**         | `bun --bun run build`       | Generates production static build in `dist/`    |
| **Preview**       | `bun --bun run preview`     | Locally previews production build               |
| **Lint & Format** | `bun --bun run biome`       | Checks and auto-fixes formatting and lint rules |
| **Type Check**    | `bun --bun run astro check` | Runs Astro and TypeScript diagnostics           |
| **Commit Lint**   | `bun --bun run commitlint`  | Validates commit message convention             |

---

## Coding Conventions

### File & Component Naming

- **Astro Components**: Use `PascalCase.astro` (e.g., `HeroSection.astro`, `Dropdown.astro`, `ThemeSelector.astro`).
- **Scripts, Data, and Utilities**: Use `kebab-case.ts` (e.g., `icon-props.ts`, `navigation.ts`, `clipboard.ts`).
- **Path Alias**: Use `$/` to reference files inside `src/` (configured in `tsconfig.json`). Example: `import Layout from "$/layouts/Layout.astro"`.

### Project Organization

- Whenever creating, modifying, or adding code in any form, including files, folders, modules, or other project artifacts, consider the organization of the project as a whole.
- Keep file and folder names consistent, descriptive, and aligned with the conventions above.
- Place files and modules in logical directory structures based on their function or domain; do not add them to arbitrary catch-all locations.
- Avoid unnecessary duplicate code, files, modules, or abstractions; reuse existing implementations when they already serve the requirement.
- Preserve an organization that allows a new developer opening the project for the first time to understand its structure and purpose without explanations outside the codebase.

### Functions & TypeScript

- Prefer the `function` keyword when declaring named functions.
- Prefer arrow functions when a function is passed directly as an inline argument or callback.
- Client scripts in `src/scripts/` must be valid ES modules (include `export type {};` or exports) to ensure isolated module scope and prevent top-level variable collisions.
- Use JavaScript only when it is genuinely necessary. Prefer HTML and CSS/Tailwind whenever they can implement the required behavior; add JavaScript only for behavior that cannot be adequately achieved with HTML and CSS/Tailwind alone, such as client-side state, complex event-driven interactions, clipboard access, or other browser APIs.
- Locals augmentation belongs in `src/env.d.ts` using top-level `import type` and `declare global { namespace App { interface Locals { ... } } }`.

### Styling & Design System

- **Tailwind CSS v4**: Uses CSS-first configuration (`@theme`, `@plugin`, `@custom-variant`). Do not add a `tailwind.config.js` file.
- **daisyUI v5**: Every daisyUI utility or component class MUST be prefixed with `d-` (e.g., `d-btn`, `d-menu`, `d-dropdown`, `d-badge`, `d-card`).
- **Excluded files (treat as non-existent)**: Any file in `src/styles/system` whose name starts with `_` (e.g., `_colors.css`, `_borders.css`, `_effects.css`) is unused. Do not reference, import, or consider these files.

---

## AI Workflow

Follow this workflow every time the codebase changes (creating, updating, deleting, renaming, or moving files).

### 1. Validate after every change

1. Run `bun --bun run biome`.
   - If it fails, fix the underlying issues and re-run until it passes.
   - Fix the root cause; do not silence rules with `biome-ignore` unless the user explicitly asks for it.
2. Once biome passes, run `bun --bun run astro check`.
   - If it fails, fix the issues and re-run until it passes.
   - Any fix that touches a file again sends you back to step 1.
3. Repeat until both commands pass with no errors.

### 2. Ask the user for approval

- Once both checks pass, **stop**. Give a short summary: which files changed and what was done.
- Ask the user whether the result matches what they wanted.
- Do not run `git add`, `git commit`, or `git push` before the user explicitly approves.
- If the user asks for changes, make them, repeat step 1, then ask again. Keep looping until the user accepts the result.

### 3. Commit and push (only after user approval)

1. Run `git status` and `git diff` to confirm nothing unintended is included.
2. Stage only the files relevant to this task (`git add <path>`), not `git add -A`, unless the user asks for everything.
3. Commit with a message that follows Conventional Commits:
   - Format: `type(scope): subject` when the scope adds clarity; otherwise use `type: subject`.
   - Scope is optional, not mandatory. Use it only when it helps identify the affected area.
   - Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
   - Subject: imperative mood, lowercase, no trailing period, around 72 characters max.
   - Body: optional; add it only when needed to explain why the change was made, context, or impact.
   - Footer: optional; add it only when needed for references such as issue IDs, breaking changes, or co-authors.
4. Run `git push`.
5. After pushing, confirm to the user that the commit and push succeeded, including the commit hash and branch.

### 4. Handling git hook failures (lefthook)

This repo uses lefthook, so git runs extra checks on commits and pushes:

| Stage        | What runs                               | If it fails                                                                |
| ------------ | --------------------------------------- | -------------------------------------------------------------------------- |
| `pre-commit` | `biome` on staged files & `astro check` | Fix errors, return to step 1, re-stage, commit again                       |
| `commit-msg` | `commitlint`                            | Ensure subject format and ensure body line length <= 100 characters        |
| `pre-push`   | `bun --bun run build`                   | Fix build errors, return to step 1, amend commit or add fix-up, push again |

### 5. Hard rules

- Never use `--no-verify`, `HUSKY=0`, `LEFTHOOK=0`, or any other way to bypass hooks.
- Never use `git push --force` or `--force-with-lease` unless the user explicitly asks.
- Never create branches, merge, rebase, or reset unless the user asks.
- Never commit secrets (`.env`, keys, credentials).
- If a command fails for reasons outside the code (missing dependencies, network, permissions), report it to the user instead of working around it by changing project configuration.

---

## Documentation Links

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [daisyUI v5 LLMs Reference](https://daisyui.com/llms.txt)
