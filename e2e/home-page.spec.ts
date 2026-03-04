import { expect, test } from "@playwright/test";

const testBaseline = process.env.E2E_VISUAL_MODE === "figma";

test("Home page should match the snapshot", async ({ page }) => {
  await page.goto("/");

  // Ensure lazy-loaded content is loaded by scrolling to the bottom of the page.
  await page.evaluate(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  // Wait until the bottom of the page is reached and all network requests are idle.
  await page.waitForFunction(() => {
    const html = document.documentElement;
    return window.scrollY === html.scrollHeight - html.clientHeight;
  });
  await page.waitForLoadState("networkidle");

  await expect(page).toHaveScreenshot(
    `home-page${testBaseline ? "-baseline" : ""}.png`,
    {
      fullPage: true,
      maxDiffPixels: testBaseline ? 0 : 2,
    },
  );
});
