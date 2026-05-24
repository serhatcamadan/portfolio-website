# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR (localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Architecture

Single-page React app built with Vite. All application code lives in [src/](src/).

- [src/main.jsx](src/main.jsx) — entry point, mounts `<App />` into `#root`
- [src/App.jsx](src/App.jsx) — root component, currently the only component
- [src/index.css](src/index.css) — global styles; contains only `@import "tailwindcss"`
- [src/App.css](src/App.css) — component-scoped styles for App (currently empty)
- [public/](public/) — static assets served as-is (favicon, icons SVG sprite)

## Styling

Tailwind CSS v4 is integrated via the `@tailwindcss/vite` plugin — no `tailwind.config.js` is needed. Use Tailwind utility classes directly in JSX. The only CSS entry point is the `@import "tailwindcss"` in [src/index.css](src/index.css).

## Linting

ESLint is configured for `.js`/`.jsx` files with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`. No TypeScript — the project uses plain JavaScript/JSX.
