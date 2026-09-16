## Project Overview

- Package manager: **bun** (not npm/pnpm/yarn). See [package.json](package.json) for full dependency list and scripts.
- Icons: use `@lucide/astro` for icons; do not introduce another icon library.

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

1. Run `git status` and `git diff` to confirm nothing unintended is included. 2. Stage only the files relevant to this task (`git add <path>`), not `git add -A`, unless the user asks for everything.
2. Commit with a message that follows Conventional Commits:
   - Format: `type(scope): subject`
   - Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
   - Subject: imperative mood, lowercase, no trailing period, around 72 characters max
   - Add a body when the change needs explanation, and a `BREAKING CHANGE:` footer when applicable
   - Example: `feat(header): add mobile navigation dropdown`
3. Run `git push`.
4. After pushing, confirm to the user that the commit and push succeeded, including the commit hash and branch.

### 4. Handling git hook failures (lefthook)

This repo uses lefthook, so git runs extra checks. If any stage fails, the commit or push is aborted — fix it and retry, never skip it.

| Stage        | What runs                                                                                 | If it fails                                                                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `pre-commit` | `bun --bun run biome {staged_files}` (with `stage_fixed`) and `bun --bun run astro check` | Fix the errors, return to step 1, then commit again                                                                                          |
| `commit-msg` | `bun --bun run commitlint`                                                                | Correct the commit message so it satisfies Conventional Commits, then commit again                                                           |
| `pre-push`   | `bun --bun run build`                                                                     | Fix the build errors, re-run step 1, create a fix-up commit (or `git commit --amend` if the last commit hasn't been pushed), then push again |

Additional notes:

- `stage_fixed: true` means biome may auto-fix and stage files during the commit. After a successful commit, check `git show --stat` or `git status` to confirm the commit contains what you expect.
- If the pre-push build keeps failing, stop, report the error to the user, and wait for direction.

### 5. Hard rules

- Never use `--no-verify`, `HUSKY=0`, `LEFTHOOK=0`, or any other way to bypass hooks.
- Never use `git push --force` or `--force-with-lease` unless the user explicitly asks.
- Never create branches, merge, rebase, or reset unless the user asks.
- Never commit secrets (`.env`, keys, credentials).
- If a command fails for reasons outside the code (missing dependencies, network, permissions), report it to the user instead of working around it by changing project configuration.

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
