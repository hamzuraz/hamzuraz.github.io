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
- This project uses daisyUI v5. Its configuration is in `src/styles/system/daisyui.css`.
- Prefix every daisyUI component and modifier class with `d-`, such as `d-btn`, `d-menu`, and `d-dropdown`. Tailwind utility classes remain unprefixed.
- When creating or styling a component, first look for a suitable daisyUI component in the official documentation at https://daisyui.com/components/. Use and adapt that component with Tailwind CSS v4 utilities as needed; only build the component with Tailwind CSS v4 utilities when no suitable daisyUI component exists.
