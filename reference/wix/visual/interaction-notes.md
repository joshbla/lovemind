# Wix Visual Interaction Notes

## Archive Scope

- The archive covers the 48 authoritative URLs in `../content/route-manifest.json`.
- Every route has one full-page desktop capture at a 1440 x 1000 viewport and one full-page mobile capture at a 390 x 844 viewport.
- The capture pass scrolls to the bottom and back to the top before recording evidence and taking the screenshot. This loads deferred media and leaves entrance effects in their settled state.
- Street-address and telephone text is excluded from metadata and these notes. The source screenshots remain unaltered visual references.

## Navigation And Dropdowns

- Desktop uses a dark horizontal header with the logo and Lovemind wordmark on the left, primary links in the center, and login/social controls on the right.
- Services, About, and Policies expose hover submenus. The Services submenu was inspected live and contains High School Tutoring, Undergraduate Tutoring, Chinese Tutoring, and Plans & Pricing.
- Overflow destinations are grouped under More on desktop.
- Mobile replaces the link row with a hamburger control while retaining the logo, wordmark, and social links in the header. Content navigation is therefore drawer-based rather than a compressed desktop row.

## Sticky Behavior

- The site header uses sticky positioning across the route set. On live inspection it remained pinned below the Wix banner after scrolling well into the page.
- The Wix promotional strip is fixed above the header and is part of the source appearance, not Lovemind branding.
- A few pages also contain fixed Wix overlays or promotional panels. These are visible in the corresponding captures but should not be mistaken for shared Lovemind components.

## Scroll And Entrance Effects

- Wix motion containers report completed entrance motion after the capture script's priming scroll. Captures therefore show settled final positions rather than mid-animation frames.
- Many links, buttons, menu labels, cards, and form controls use short CSS transitions, generally around 0.2 to 0.4 seconds.
- Exact easing curves and every pre-entry offset were not exhaustively measured. Reproduction should favor restrained fades or short movement and use the screenshots as the final-state reference.

## Slideshows And Carousels

- The home page contains a slideshow with Previous and Next controls plus pagination dots.
- Live use of Next changed the featured panel from High School Tutoring to Undergraduate Tutoring, including its image, description, and action links.
- Desktop shows directional arrows over the wide image panel. Mobile stacks the panel and retains compact pagination.
- Automated rotation timing was not conclusively established; manual navigation and visual states were confirmed.

## Transparency And Overlays

- Several policy-style pages use a nearly transparent background image layer at approximately 3% opacity.
- The contact page places white form controls over dark photographic overlays. Other image-led sections use dark or colored overlays to maintain white-text contrast.
- The source map includes its own labels, controls, marker overlays, and information card. Per the fidelity contract, the reconstruction should instead use a dark generic Salt Lake City, Utah view without a street-level marker.

## Hover States

- Header dropdowns open on pointer hover.
- Buttons and links use color/background transitions rather than large movement. On the home page, the Why it works button changes from a dark background to bright blue over a 0.2-second transition while retaining its blue border.
- Card and booking actions expose standard Wix hover transitions. Mobile has no equivalent persistent hover state and should prioritize pressed/focus feedback.

## Embedded Map

- The contact route contains an interactive Google map iframe with map/satellite modes, zoom controls, Street View, an external Google Maps link, and multiple source markers.
- The visual archive records the source map for reference only. The approved reconstruction intentionally removes precise location data and uses the generic Salt Lake City treatment described above.

## Forms

- The contact route contains two visually distinct forms: an investor form with Name, Email, Subject, Message, and Submit; and a press form with First Name, Last Name, Email, Phone, Question, and Submit.
- The job-application route contains a multi-step form with role, employment-status, and experience selectors followed by Next.
- Forms were inspected without submitting data. Validation, success, error, and subsequent job-application steps remain unverified.
- Per the fidelity contract, reconstruction contact actions should resolve to `mailto:contact@lovemind.net`; it should preserve the visual presence of forms where useful without implying submission succeeded.

## Mobile Differences

- Desktop side-by-side sections become single-column stacks on mobile, including the home feature blocks, service content, pricing cards, forms, and footer material.
- Type and controls scale down while major image sections crop more tightly and often become taller relative to width.
- The contact map spans the mobile content width and both forms stack vertically beneath it.
- Full-page mobile captures show the dedicated Wix mobile composition rather than a cropped desktop canvas.

## Remaining Gaps

- Form submission outcomes, booking/payment flows, login, checkout, and account behavior were intentionally not exercised.
- Exact animation easing, entrance starting frames, slideshow auto-advance timing, and every control's focus/pressed state were not exhaustively sampled.
- Third-party map tiles and transient Wix promotional overlays can vary between loads; the captures represent one stable loaded state per viewport.
