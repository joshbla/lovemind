# Lovemind

A high-fidelity reconstruction of the Lovemind website, built with Next.js, TypeScript, and Tailwind CSS for deployment on Vercel.

## Commands

- `npm run dev` starts local development.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint.
- `npm run typecheck` runs the TypeScript compiler without emitting files.
- `npm run test:e2e` runs Playwright browser tests.

The fidelity requirements are documented in `docs/FIDELITY.md`. Deferred functionality and editorial review are tracked in `TODO.md`.

## Branches

- `staging` contains the Next.js application and is the Vercel deployment branch.
- `main` remains the minimal GitHub Pages site for `lovemind.net` and redirects visitors to the active hosted site.

The application branch must not be fast-forwarded into `main`. Once the Vercel deployment is approved, `main` receives a separate redirect-only update.
