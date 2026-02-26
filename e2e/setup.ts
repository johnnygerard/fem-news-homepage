import { expect, test } from "@playwright/test";

test("Playwright is working", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/\w+/);
});
