import { expect, test } from "@playwright/test";

test("Home page should match the snapshot", async ({ page }) => {
  await page.goto("/");

  // Ensure lazy-loaded content is loaded by scrolling to the bottom of the page.
  await page.evaluate(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });

  await expect(page).toHaveScreenshot("home-page.png", {
    fullPage: true,
    maxDiffPixels: 0,
  });
});
