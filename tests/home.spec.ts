import { expect, test } from "@playwright/test";

test("renders the Lovemind foundation", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Health-Centered Tutoring" })).toBeVisible();
  await expect(page.getByRole("banner").getByRole("link", { name: "Lovemind" })).toBeVisible();
  await expect(page.getByText("Salt Lake City, Utah")).toBeVisible();
});
