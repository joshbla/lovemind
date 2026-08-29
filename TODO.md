# Future Work

Items here are intentionally outside the high-fidelity reconstruction.

## Editorial Review

- Review and, only with owner approval, correct typos, contradictions, broken links, outdated statements, operational claims, prices, policies, health-related claims, research framing, and other source-content concerns after the fidelity copy is complete.
- Review whether all historical personnel, jobs, locations, and organizational roles should remain public.
- Review third-party media licensing before any future commercial relaunch.

## Booking

- Decide whether booking should return.
- Select a scheduling provider or design a custom scheduling system.
- Define services, durations, availability, tutor assignment, time zones, trials, reminders, rescheduling, cancellation, and no-show behavior.

## Payments

- Decide whether payments should return.
- Evaluate Stripe or another payment provider.
- Define pricing, taxes, discounts, refunds, receipts, payout handling, reconciliation, and failure recovery.

## Plans And Accounts

- Decide whether session packages, subscriptions, customer accounts, or tutor accounts are useful.
- Define package balances, redemption, expiration, roles, authentication, privacy, retention, and account deletion before selecting a database or authentication provider.

## Shop

- Decide whether the Lovemind shop and headband should return.
- Define inventory, fulfillment, shipping, taxes, returns, and customer support before enabling purchases.

## Forms

- Decide whether contact, investor, press, tutor, and job application forms should return instead of email links.
- Define recipients, required fields, consent, retention, spam protection, delivery, and response expectations.

## Hosting And Domain

- Configure the owner's personal Vercel project to deploy the application from `staging` rather than `main`.
- After the Vercel production deployment is approved, update the small GitHub Pages redirect on `main` to point to the stable Vercel URL instead of Wix while retaining the `lovemind.net` CNAME.
- Keep the current Wix DNS records pointing to GitHub Pages for now. Do not modify Wix DNS as part of this project.
- Preserve all Google Workspace MX, SPF, DKIM, DMARC, and verification records during any DNS change.
- Later evaluate transferring the domain registration away from Wix, potentially through Porkbun or directly to Cloudflare after Cloudflare DNS is active.
- Treat any registrar or authoritative DNS migration as a separate project with a verified zone export and rollback plan.
