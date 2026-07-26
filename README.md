# Style Bakery — Design System

The documentation site and living style guide for
[Style Bakery](https://github.com/stylebakery/stylebakery), the themeable
Svelte 5 component library.

- **Live site:** https://stylebakery.net

It documents every component with copy-paste examples, a color and token
reference, a visual **Theme Builder**, and a set of ready-made page templates
and application layouts.

> **Svelte 5 only.** Both this site and the library it documents are built with
> Svelte 5 / SvelteKit. There is no React, Vue, or web-components version.

## What it's for

- **Documentation** — a browsable reference for every component, prop, color,
  and design token in the library.
- **A playground** — experiment interactively: build and preview a palette in
  the **Theme Builder**, and try the full-page **templates** and app-shell
  **layouts** before dropping them into a real app.
- **A component workbench** — the site builds the
  [Style Bakery library](https://github.com/stylebakery/stylebakery) **from
  source**, not from npm. Vite resolves `@stylebakery/stylebakery` to a sibling
  checkout (`../stylebakery/src/lib`), so editing a component hot-reloads
  straight into the docs. You can develop, document, and test components against
  live examples **without publishing to npm** — publish only once you're happy.
  See [`vite.config.js`](./vite.config.js).

## Develop

Clone the library repo alongside this one, then run the dev server:

```bash
git clone git@github.com:stylebakery/stylebakery.git ../stylebakery
npm install
npm run dev
```

The site runs on **http://localhost:8000**. Editing files in
`../stylebakery/src/lib/` hot-reloads instantly.

If your library checkout lives elsewhere, point `STYLEBAKERY_LIB` at it:

```bash
STYLEBAKERY_LIB=/path/to/stylebakery npm run dev
```

## Build

```bash
npm run build      # static site → build/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  routes/
    (authenticated)/     ← pages that use the app shell
      components/         ← one documented page per component
      colors/             ← color & token reference
      theme-builder/      ← visual theme editor
      templates/          ← full-page templates
      layouts-demo/       ← app-shell layout gallery
      dashboard, forms, settings/ … ← example screens
    (anonymous)/          ← login / logout demos (no shell)
  lib/
    docs/                 ← DocsPage, DocExample, PropsTable, Playground …
    templates/            ← reusable page templates
    theme-*.js            ← Theme Builder model, presets, store
```

## License

MIT
