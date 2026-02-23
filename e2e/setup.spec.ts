import { expect, test } from "@playwright/test";

test("Playwright is working", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
});
