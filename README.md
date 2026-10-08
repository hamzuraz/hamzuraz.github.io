# Rifki Muhazzar - Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/hamzuraz/hamzuraz.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/hamzuraz/hamzuraz.github.io/actions/workflows/deploy.yml)
[![Built with Astro](https://img.shields.io/badge/Astro-7.x-FF5D01.svg?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Runtime Bun](https://img.shields.io/badge/Bun-1.4.x-FBF0DF.svg?logo=bun&logoColor=black)](https://bun.sh/)
[![Biome](https://img.shields.io/badge/Code_Style-Biome-60A5FA.svg?logo=biome&logoColor=white)](https://biomejs.dev/)

Personal portfolio website of **Rifki Muhazzar**, deployed on GitHub Pages: [hamzuraz.github.io](https://hamzuraz.github.io).

Built with **Astro 7** featuring static site generation (SSG), multi-language localization (i18n), and an extensible multi-theme system.

---

## ✨ Features

- **Internationalization (i18n)**:
  - First-class multi-language routing supporting 8 locales:
    - English (`en` - default)
    - Bahasa Indonesia (`id`)
    - Japanese (`ja`)
    - German (`de`)
    - Spanish (`es`)
    - French (`fr`)
    - Simplified Chinese (`zh-CN`)
    - Traditional Chinese (`zh-TW`)
  - Automated `hreflang` alternative tags for search engine optimization (SEO).
- **Multi-Theme Engine**:
  - 6 distinct design aesthetics, each available in both **Light** and **Dark** variants (12 themes total):
    - Default
    - Brutalist
    - Catppuccin
    - Monochrome
    - Sandstone
    - Terracotta
  - Theme state persistence via `localStorage` with initial fallback to system preference (`prefers-color-scheme`).
- **Markdown Content Collections**:
  - Organized project showcases managed via Astro Content Collections with localized descriptions.
- **Modern Interactive UI**:
  - Built with accessible components powered by [Basecoat CSS](https://basecoatui.com/).
  - Keyboard shortcuts navigation (`kbd-shortcuts.ts`).
  - Fully responsive mobile drawer navigation and desktop header.
- **Code Quality & Testing Gating**:
  - Unit tests powered by Bun's native test runner (`bun test`).
  - Formatting and linting via Biome.
  - Pre-commit and pre-push hooks managed by Lefthook with Conventional Commits enforcement.

---

## 🛠️ Tech Stack

- **Framework**: [Astro v7](https://astro.build/)
- **Runtime & Package Manager**: [Bun v1.4+](https://bun.sh/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Basecoat CSS v1](https://basecoatui.com/)
- **Icons**: [Lucide Astro](https://lucide.dev/) (`@lucide/astro`)
- **Formatter & Linter**: [Biome](https://biomejs.dev/)
- **Unit Testing**: [Bun Test](https://bun.sh/docs/cli/test)
- **Git Hooks**: [Lefthook](https://lefthook.dev/)
- **Commit Linter**: [Commitlint](https://commitlint.js.org/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 📁 Project Structure

```text
hamzuraz.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD workflow
├── public/                     # Static assets (favicons, fonts, images)
├── src/
│   ├── assets/                 # SVG assets
│   ├── components/             # Astro UI components
│   │   ├── common/             # Reusable UI (Button, Badge, Card, Toast, Theme/Language selectors)
│   │   ├── footer/             # Site footer
│   │   ├── head/               # SEO meta tags, font preloading, theme initliazer script
│   │   ├── header/             # Header bar, desktop menu, and mobile navigation
│   │   ├── home/               # Home page (Hero, Projects, Skills, and Contact sections)
│   │   └── projects/           # Projects page
│   ├── content/                # Content collections (projects markdown per locale)
│   ├── data/                   # Data registries (contacts, profiles, skills, themes)
│   ├── i18n/                   # I18n routing configuration and dictionary translations
│   ├── layout/                 # BaseLayout.astro and I18nLayout.astro
│   ├── pages/
│   │   ├── [...lang]/          # Dynamic localized routes (index.astro, projects.astro)
│   │   └── 404.astro           # 404 Not Found error page
│   ├── scripts/                # Client-side scripts (theme engine, shortcuts, toast, clipboard)
│   └── styles/                 # CSS (global styles, typography, and theme tokens)
├── tests/
│   └── unit/                   # Unit test suites (data registries and i18n logic)
├── astro.config.ts             # Astro & Vite configuration
├── biome.json                  # Biome formatting and linting configuration
├── lefthook.yml                # Lefthook Git hooks configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) `v1.4.0` or later
- [Git](https://git-scm.com/)

> [!NOTE]
> This project strictly uses **Bun** as the runtime and package manager.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hamzuraz/hamzuraz.github.io.git
   cd hamzuraz.github.io
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. (Optional) Initialize Lefthook git hooks if not configured automatically:
   ```bash
   bun run prepare
   ```

---

## 💻 Available Scripts

| Script            | Command                     | Description                                                                    |
| :---------------- | :-------------------------- | :----------------------------------------------------------------------------- |
| **Development**   | `bun --bun run dev`         | Starts the Astro development server locally                                    |
| **Build**         | `bun --bun run build`       | Builds the production site to `./dist`                                         |
| **Preview**       | `bun --bun run preview`     | Previews the production build locally                                          |
| **Format & Lint** | `bun --bun run biome:check` | Formats, lints, sorts imports, and automatically applies safe fixes with Biome |
| **Type Check**    | `bun --bun run astro check` | Validates Astro templates and TypeScript types                                 |
| **Unit Tests**    | `bun run test`              | Runs the test suite in `tests/unit` via Bun Test                               |
| **Coverage**      | `bun run test:coverage`     | Runs unit tests and prints the code coverage report                            |

---

## 🛡️ Code Quality & Git Workflow

- **Pre-commit**:
  Automatically runs Biome formatting and linting check and Astro type check on staged files.
- **Commit Messages**:
  Enforces [Conventional Commits](https://www.conventionalcommits.org/) standards via Commitlint:
  ```text
  <type>(<scope>): <subject>
  ```
  _(Examples: `feat(i18n): add spanish translation`, `fix(theme): prevent flash of unstyled content`)_
- **Pre-push**:
  Verifies that all unit tests pass (`bun test`) and that the production build completes successfully (`bun run build`).

---

## 🚢 Deployment

The repository is configured with continuous deployment to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Every push/merge to the `main` branch triggers:

1. Dependency installation with `bun ci`
2. Code style verification with `biome ci .`
3. Static type check with `astro check`
4. Unit test suite execution (`bun test`)
5. Static build generation (`astro build`)
6. Deployment to [hamzuraz.github.io](https://hamzuraz.github.io)
