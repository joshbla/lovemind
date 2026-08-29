import { expect, test } from "@playwright/test";
import routeManifest from "../reference/wix/content/route-manifest.json";

const routes = routeManifest.routes.map((route) => route.intendedLocalPath);

test("all authoritative routes render safely", async ({ page }) => {
  test.setTimeout(180_000);
  const failures: string[] = [];

  expect(routes).toHaveLength(48);
  expect(new Set(routes).size).toBe(48);
  expect(routes.filter((route) => route.startsWith("/papers-and-studies/"))).toHaveLength(12);

  for (const route of routes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    const audit = await page.evaluate(() => {
      const main = document.querySelector("main");
      if (!(main instanceof HTMLElement)) {
        throw new Error("Missing main element");
      }

      const bodyText = document.body.innerText;
      const mailtoLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]'));

      return {
        title: document.title,
        mainTextLength: main.innerText.trim().length,
        wixDependencies: document.querySelectorAll('[src*="wix"], [href*="wixsite"], [href*="wixstatic"], [href*="parastorage"]').length,
        forms: main.querySelectorAll("form").length,
        submitControls: main.querySelectorAll('[type="submit"]').length,
        badMailto: mailtoLinks.some((link) => !link.href.startsWith("mailto:contact@lovemind.net")),
        preciseAddress: /Wadsworth|Denver, CO|80226|615-0074/.test(bodyText),
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      };
    });

    if (response === null) {
      failures.push(`${route}: no response`);
    } else if (!response.ok()) {
      failures.push(`${route}: HTTP ${response.status()}`);
    }
    if (audit.mainTextLength === 0) failures.push(`${route}: empty main content`);
    if (audit.title.length === 0) failures.push(`${route}: missing title`);
    if (audit.wixDependencies > 0) failures.push(`${route}: runtime Wix dependency`);
    if (audit.forms > 0 || audit.submitControls > 0) failures.push(`${route}: active form control`);
    if (audit.badMailto) failures.push(`${route}: unapproved contact email`);
    if (audit.preciseAddress) failures.push(`${route}: precise address or telephone`);
    if (audit.horizontalOverflow) failures.push(`${route}: horizontal overflow`);
  }

  expect(failures).toEqual([]);
});

test("research, contact, and sitemap expose complete static content", async ({ page, request }) => {
  await page.goto("/research");
  await expect(page.locator("main article")).toHaveCount(27);

  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Salt Lake City, Utah" })).toBeVisible();
  await expect(page.locator("main iframe")).toHaveCount(0);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const xml = await sitemap.text();
  expect(xml.match(/<url>/g)).toHaveLength(48);
});
