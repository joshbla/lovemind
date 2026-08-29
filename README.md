# Lovemind

A high-fidelity reconstruction of the Lovemind website, built with Next.js, TypeScript, and Tailwind CSS for deployment on Vercel.

## Commands

- `npm run dev` starts local development.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint.
- `npm run typecheck` runs the TypeScript compiler without emitting files.
- `npm run test:e2e` runs Playwright browser tests.

The fidelity requirements are documented in `docs/FIDELITY.md`. The unusual branch and deployment workflow is documented in `docs/DEPLOYMENT.md`. Deferred functionality and editorial review are tracked in `TODO.md`.

## Branches

- `staging` contains the Next.js application and is the only branch used for Vercel application deployments.
- `main` remains the minimal GitHub Pages site for `lovemind.net` and redirects visitors to `https://lovemind-flame.vercel.app`.

The application branch must not be merged or fast-forwarded into `main`. Vercel currently requires an explicit production deployment from `staging`, while a project-level branch guard cancels Git builds from `main`. Follow `docs/DEPLOYMENT.md` for releases and redirect changes.
