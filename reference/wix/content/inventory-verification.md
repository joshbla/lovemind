# Inventory Verification

## Source Counts

- Crawl entries processed: 52 of 52
- XML entries excluded from HTML inventory: 4
- Public HTML captures: 48
- Pages sitemap members: 28
- Booking sitemap members: 6
- Product sitemap members: 1
- Sitemap union: 35
- Research detail routes reachable from the research page: 12
- Other reachable-only HTML routes: 1

## Reconciliation

- All 35 sitemap-union routes have an HTTP 200 HTML capture.
- Missing sitemap routes in the crawl: 0.
- The 48 HTML routes reconcile as 35 sitemap members + 12 research detail routes + 1 other reachable-only route.
- Reachable-only route outside research: https://jblakezsmith.wixsite.com/lovemind/results-and-studies.
- Sitemap XML documents and Wix platform/chrome destinations are not treated as public HTML routes.
- An independent indexed-web search for the Wix site surfaced only the homepage and no additional orphan routes.

## XML Exclusions

- https://jblakezsmith.wixsite.com/lovemind/pages-sitemap.xml (200, text/xml; charset=utf-8)
- https://jblakezsmith.wixsite.com/lovemind/sitemap.xml (200, text/xml; charset=utf-8)
- https://jblakezsmith.wixsite.com/lovemind/booking-services-sitemap.xml (200, text/xml; charset=utf-8)
- https://jblakezsmith.wixsite.com/lovemind/store-products-sitemap.xml (200, text/xml; charset=utf-8)

## Capture Failures

- Non-200 HTML captures: 0.
- Missing or empty HTML markdown captures: 0.
- Snapshot byte mismatches against captured markdown: 0.

## Gaps

- The research index capture contains 27 named research entries, while only 12 research detail URLs were exposed in its captured links and crawled. No detail URL was captured for the remaining 15 entries.
- The crawl records rendered markdown and extracted links/media, not source HTML form controls or client-side behavior. Form fields absent from rendered markdown cannot be inventoried without inventing data.
- External destinations were not requested as crawl targets, so their current HTTP status is unverified.

## Broken Or Unverified Destinations

- Confirmed malformed Wix root-fragment destinations captured from the home page: https://jblakezsmith.wixsite.com/#comp-l3caclj2, https://jblakezsmith.wixsite.com/#comp-l3cacljq. Both omit the /lovemind site path.
- External booking destinations captured but not crawled: https://www.lovemind.net/bookings-checkout/trial-high-school-tutoring/book, https://www.lovemind.net/bookings-checkout/trial-undergraduate-tutoring/book. These are inventory gaps, not asserted failures.
- Original typos, stale claims, and broken-looking destinations remain verbatim in route snapshots per the fidelity contract.
- Removed telephone and street-address values from snapshots and manifest; normalized copy uses the approved generic location (Salt Lake City, Utah) and omits the telephone number.

## Route Breakdown

- booking-service: 6
- company: 4
- home: 1
- job-application: 3
- jobs: 1
- legal-policy: 5
- placeholder: 3
- policy-index: 1
- research-detail: 12
- research-index: 1
- results: 1
- service-catalog: 7
- shares: 1
- shop: 1
- store-product: 1
