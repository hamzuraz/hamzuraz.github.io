## Project Overview

- This project is a portfolio website deployed to GitHub Pages and available at `https://hamzuraz.github.io`.
- Use **Bun** as the runtime and package manager. Do **not** use `npm`, `pnpm`, or `yarn`.
- The main dependencies used by this project are:
  - `astro` v7
  - `@lucide/astro` v1
  - `tailwindcss` v4
  - `basecoat-css` v1
- Refer to `@package.json` for the complete list of dependencies, dev dependencies, and available scripts.
- The project supports:
  - Multiple themes
  - Multiple languages (i18n)
- Preserve existing theme and i18n behavior when making changes.

## Dependency Management

- Do not add, remove, or change dependencies unless explicitly requested by the user.
- Prefer using existing dependencies and built-in project capabilities.
- If a new dependency is genuinely necessary and there is no reasonable alternative, ask the user for explicit approval before adding it.
- Do not proceed with the dependency change without user approval.

## Astro Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## General Coding Guidelines

- Keep files, folders, code, comments, and naming organized and easy to understand, especially for someone encountering the project for the first time.
- Build the code and the overall codebase so it can scale easily as the project/feature grows.
- Keep implementations simple and avoid unnecessary complexity.
- When modifying existing code, make the smallest change necessary to satisfy the requirement.
- Prefer native HTML/Astro and CSS-based solutions over JavaScript/TypeScript whenever practical.
- Avoid JavaScript/TypeScript when the same behavior can be implemented clearly with HTML/Astro, Tailwind CSS, or Basecoat CSS.

## Markup and Styling

### Astro / HTML

- When creating a component from scratch, prefer semantic HTML and straightforward Astro components.
- When modifying an existing component, preserve its existing HTML structure unless the user explicitly asks for a semantic HTML refactor.
- Keep markup readable and avoid unnecessary wrappers, abstractions, or client-side logic.
- Avoid introducing excessive or overly complex props that make a component difficult to understand or use; prefer simple, focused component interfaces.

### Tailwind CSS / Basecoat CSS

- Use **Tailwind CSS utility classes in the `class` attribute** as the primary styling approach.
- If a suitable native Tailwind utility does not exist, use a Tailwind arbitrary value/class rather than introducing a separate styling approach.
- Do not introduce custom CSS, `<style>` blocks, CSS modules, or other styling systems unless they are genuinely necessary.

### Basecoat CSS Components

- Basecoat CSS is the preferred starting point for UI components when an appropriate component already exists.
- The user will often provide an initial component taken from Basecoat CSS; treat it as the starting point and modify it only as much as necessary.
- Before creating or significantly modifying a Basecoat-based component, check the Basecoat CSS documentation:
  - `https://basecoatui.com/llms.txt`
  - `https://basecoatui.com/llms-full.txt`
- When adapting an existing Basecoat component:
  - Preserve its overall structure and behavior.
  - Modify only the parts necessary to meet the requirement.
  - Avoid unnecessary rewrites or major structural changes.
- Some Basecoat components include built-in JavaScript behavior. Preserve and use that behavior rather than reimplementing it.
- Basecoat JavaScript is centralized in `@src/scripts/basecoat.ts`, which imports `basecoat/all`. The `basecoat.ts` script is imported by `@src/layouts/BaseLayout.astro`.
- Do not import `basecoat/all` or any Basecoat JavaScript directly into individual components unless explicitly necessary.
- When creating a component from scratch:
  1. Check the Basecoat CSS documentation first for an existing component that matches the requirement.
  2. Use the existing Basecoat component when one exists, and modify it only when necessary to meet the requirement.
  3. If no suitable component exists and a custom implementation is necessary, use Basecoat documentation as a reference whenever applicable.

## JavaScript / TypeScript

- Use JavaScript/TypeScript only when the required behavior cannot be implemented clearly with HTML/Astro and CSS/Tailwind/Basecoat.
- Keep JavaScript/TypeScript minimal, simple, and easy to understand.
- Prefer the `function` keyword for named function declarations.
- Prefer arrow functions for functions passed directly as arguments or callbacks.

## Language Policy

- Follow the language used by the user when communicating in the conversation.
- Regardless of the conversation language, treat the entire codebase as **English-only**.
- Use English for:
  - File and folder names
  - Variables, functions, and component names
  - HTML attributes and identifiers
  - Comments
  - Documentation
  - Other codebase-facing text, unless the project explicitly requires another language for user-facing content.
- Do not use the conversation language for codebase-facing names or comments merely because the conversation is in that language.

## AI Agent Workflow

After completing all requested changes for a task, follow this workflow:

1. **Run Biome**
   - Run `bun --bun run biome:check`
   - If it fails, fix all reported issues and run it again.
   - Do not proceed to the next step until it passes.

2. **Run Astro Check**
   - After Biome passes, run `bun --bun run astro check`
   - If it fails, fix all reported issues.
   - After making any changes to fix the issues, return to **Step 1** and run Biome again.
   - Repeat this cycle until both Biome and Astro Check pass.

3. **Ask for the next action**
   - Once all validation checks pass, ask the user whether:
     - The result is satisfactory.
     - They want changes or further adjustments.
     - They want a commit message prepared without creating a commit.
     - They want the changes committed.
     - They want the changes committed and pushed.
   - If the user requests any additional changes, make those changes and return to **Step 1**.

4. **Commit and Push**
   - Never create a commit unless the user explicitly asks for it.
   - Never push changes unless the user explicitly asks for it.
   - Preparing or suggesting a commit message does not authorize creating the commit.
   - A request to commit does not automatically authorize pushing.
   - Commit messages must follow the Conventional Commits format.
   - Use a scope in the subject line when applicable (e.g. `feat(auth): ...`).
   - Body and footer are optional — include them only when necessary (e.g. to explain context, breaking changes, or reference an issue).

5. **When the user asks for a commit message:**
   - Before preparing the commit message, inspect only the changes currently staged by the user (`git diff --staged` / equivalent). Ignore any unstaged changes in the working directory.
   - Review the staged diff for bugs (logic errors, broken references, edge cases, type mismatches, etc.).
   - **If bugs are found:**
     - Do not provide a commit message.
     - Explain clearly what bug(s) were found and where.
     - Explain the suggested fix/solution for each bug.
     - Wait for the user's response. If the user asks for a commit message again, repeat the bug-check process from the beginning on the (possibly updated) staged changes.
     - Only skip the fix and proceed to generate a commit message if the user explicitly states they want to ignore/accept the bug as-is.
   - **If no bugs are found:**
     - Tell the user that no bugs were found in the staged changes.
     - Then provide the commit message based on all the staged changes.
