# Lovemind Fidelity Contract

## Source Of Truth

The rendered Wix site at `https://jblakezsmith.wixsite.com/lovemind` is the source of truth for this reconstruction. The goal is a high-fidelity technical copy, not a redesign, editorial revision, or reinterpretation of Lovemind.

Preserve the original:

- Copy, claims, spelling, punctuation, profiles, prices, policies, and operational framing.
- Page structure, navigation, responsive behavior, typography, colors, spacing, transparency, imagery, and decorative treatments.
- Animations, transitions, carousels, hover states, menus, embeds, and other visible interactions.
- Tutor and advisor profiles.
- Mission, philosophy, research, offerings, and brand character.

Do not silently correct typos, contradictions, broken destinations, stale information, absolute claims, or statements about current operations. Those concerns belong in `TODO.md` for later owner-directed work.

## Approved Exceptions

- Remove the street address and telephone number wherever they appear.
- Replace headquarters location references with `Salt Lake City, Utah` where location copy is needed.
- Recreate the headquarters map as a dark-styled view centered generically on Salt Lake City, Utah, without a street-level marker.
- Replace contact forms and contact actions with an attractive `mailto:contact@lovemind.net` interaction.
- Do not implement live booking, payments, checkout, customer accounts, submissions, Supabase, or Stripe in this reconstruction.
- Preserve the visual presence of inactive operational features where practical, but do not imply that a transaction or submission succeeded.

## Independence

- The production site must not load media or application resources from Wix.
- Download and serve all current brand media needed by the reconstruction.
- The discarded GitHub Pages prototype is historical only and is not a design source.
- The application will use Next.js, TypeScript, and Tailwind CSS and deploy from `staging` to the owner's personal Vercel account.
- `main` remains a dedicated GitHub Pages branch containing the `lovemind.net` CNAME and a small redirect page. Do not fast-forward the application into `main`.
- After the Vercel deployment is approved, update the redirect on `main` to point to the stable Vercel URL instead of Wix.
- The owner will handle any Wix DNS or registrar changes later. This project must not modify Wix DNS.

## Agent Boundaries

Subagents receive narrow route groups or isolated components. They must not reinterpret the brand, edit shared architecture without an explicit assignment, or make editorial corrections beyond the approved exceptions.
