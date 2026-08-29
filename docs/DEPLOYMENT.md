# Deployment And Branch Runbook

Lovemind intentionally uses two unrelated deployment branches. Do not merge or fast-forward them together.

## Current Topology

- `staging` contains the Next.js application. Application changes, tests, and Vercel production deployments originate here.
- `main` contains only the legacy GitHub Pages site, including `CNAME` and the small `index.html` redirect for `lovemind.net`.
- `lovemind.net` is still served by GitHub Pages and redirects to `https://lovemind-flame.vercel.app`.
- The Vercel project is `joshbla-org/lovemind` in the `Personal Org` scope.
- The local `.vercel` directory links this checkout to that project and is intentionally ignored by Git.

## Vercel Branch Guard

Vercel's Git connection still reports `main` as `link.productionBranch`. The CLI and project API did not accept changing that value to `staging`.

To keep redirect-only commits on `main` from replacing the application, the Vercel project has this Ignored Build Step command:

```sh
if [ "$VERCEL_GIT_COMMIT_REF" != "staging" ]; then exit 0; else exit 1; fi
```

The practical behavior is:

- A push to `main` creates a canceled Vercel deployment and leaves production unchanged.
- A push to `staging` is allowed through the Git build guard, but is not automatically promoted to production while Vercel still labels `main` as its production branch.
- Production must currently be deployed explicitly from a clean `staging` checkout.

## Production Deployment

1. Confirm `git status --short --branch` shows clean `staging` synchronized with `origin/staging`.
2. Run `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run test:e2e`.
3. Push the intended `staging` commit.
4. Run `vercel deploy --prod --yes --scope joshbla-org` from the repository root.
5. Verify `https://lovemind-flame.vercel.app` and representative routes return successfully.

Never run the production deployment command from `main`.

## Redirect Updates

If the stable Vercel URL changes:

1. Start from a clean worktree and switch to `main`.
2. Change only the redirect URL in `index.html` unless another redirect-only change is explicitly required.
3. Commit and push `main` separately.
4. Confirm the resulting Vercel Git deployment is canceled by the branch guard.
5. Switch back to `staging` and confirm the worktree is clean.

## Future Simplification

The preferred eventual configuration is to set the Vercel Production environment's branch tracking to `staging` in the Vercel dashboard. After confirming automatic production deployments from `staging` and canceled or skipped builds from `main`, review whether the Ignored Build Step command and manual production command are still needed.

Do not modify Wix DNS or move the application into `main` as part of that change.
