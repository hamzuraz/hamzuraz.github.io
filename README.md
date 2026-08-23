# Rifki Muhazzar - Portfolio

This repository contains the personal portfolio website of Rifki Muhazzar. It is built with Astro and currently provides the foundation for a multilingual portfolio homepage, theme selection, and GitHub Pages deployment.

The homepage is still under construction. The shared layout, routing, language selector, theme selector, and deployment workflow are available, while the experience, technologies, projects, blogs, and contact sections remain placeholders.

## Tech Stack

- [Astro](https://astro.build/) for the static site and component architecture
- [TypeScript](https://www.typescriptlang.org/) for type-safe development
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [daisyUI](https://daisyui.com/) for theme definitions and UI utilities
- [Svelte](https://svelte.dev/) through Astro's Svelte integration, available for interactive components
- [Bun](https://bun.sh/) for package management and local development

## Requirements

- Node.js `>=22.12.0`, as required by the project's package engine
- [Bun](https://bun.sh/docs/installation), used to install dependencies and run project scripts

## Getting Started

Install the dependencies from the project root:

```sh
bun install
```

Start the local development server:

```sh
bun run dev
```

The site is available at `http://localhost:4321` by default.

## Commands

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Astro development server |
| `bun run build` | Build the production site into `dist/` |
| `bun run preview` | Preview the production build locally |
| `bun run astro ...` | Run Astro CLI commands |
| `bun run biome` | Check supported files and apply Biome's formatting fixes |
| `bun run lefthook ...` | Run Lefthook commands |
| `bun install` | Install project dependencies and Git hooks |

## Project Structure

```text
/
├── public/                # Static assets, including fonts
├── src/
│   ├── components/        # Shared Astro components
│   ├── i18n/              # Language dictionaries and routing helpers
│   ├── layouts/           # Shared page layouts
│   ├── middleware.ts      # Resolves the language for each request
│   ├── pages/             # File-based page routes
│   ├── scripts/           # Client-side theme and language selectors
│   └── styles/            # Global styles and design system styles
├── astro.config.mjs       # Astro, Vite, and routing configuration
├── biome.json             # Biome formatter and checker configuration
├── lefthook.yml           # Git hook configuration
├── svelte.config.js       # Svelte configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project metadata and scripts
```

## Internationalization

The site currently supports three languages:

| Language | Path |
| --- | --- |
| English (default) | `/` |
| Bahasa Indonesia | `/id/` |
| Japanese | `/ja/` |

The `/en-US/` path redirects to `/`. Translations are stored in `src/i18n/dictionary/`, and language routing is handled by the project's own middleware and routing utilities.

## Themes

The site supports three theme modes:

- System: follows the user's operating system preference
- Light
- Dark

An explicitly selected theme is persisted in `localStorage` so it remains active across visits.

## Quality Checks

The project uses Biome for formatting and checks. `bun run biome` runs Biome with `--write`, so it may modify supported files. Lefthook runs the configured checks before commits and builds the site before pushes. Commit messages are validated using Conventional Commits rules.

Run the main checks locally with:

```sh
bun run biome
bun run build
```

## Deployment

The site is deployed to GitHub Pages through [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml). A push to the `main` branch, or a manual workflow run, installs dependencies, builds the Astro site, uploads the `dist/` directory, and deploys it to GitHub Pages.

## Project Status

The shared layout, header, footer, language selector, theme selector, multilingual route structure, and deployment workflow are in place. The rendered homepage is currently a skeleton with placeholder sections and a temporary title; the final portfolio content will be added over time.
