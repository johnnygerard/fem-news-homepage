import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: "http://localhost:8787",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  /* Device list: https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json */
  projects: [
    {
      name: "setup",
      testMatch: "setup.ts",
    },

    /* Mobile configurations targeting 375px width */
    {
      name: "mobile-webkit",
      dependencies: ["setup"],
      use: {
        ...devices["iPhone X"],
      },
    },

    {
      name: "mobile-chromium",
      dependencies: ["setup"],
      use: {
        viewport: { width: 375, height: 812 },
        userAgent:
          "Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.7680.0 Mobile Safari/537.36",
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        defaultBrowserType: "chromium",
      },
    },

    {
      name: "mobile-firefox",
      dependencies: ["setup"],
      use: {
        viewport: { width: 375, height: 812 },
        userAgent:
          "Mozilla/5.0 (Android 10; Mobile; rv:146.0) Gecko/146.0 Firefox/146.0",
        deviceScaleFactor: 3,
        isMobile: false, // not supported in Firefox
        hasTouch: true,
        defaultBrowserType: "firefox",
      },
    },

    /* Tablet configurations targeting 768px width */
    {
      name: "tablet-webkit",
      dependencies: ["setup"],
      use: {
        ...devices["iPad (gen 6)"],
      },
    },

    {
      name: "tablet-chromium",
      dependencies: ["setup"],
      use: {
        viewport: { width: 768, height: 1024 },
        userAgent:
          "Mozilla/5.0 (Linux; Android 10; Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.7680.0 Safari/537.36",
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        defaultBrowserType: "chromium",
      },
    },

    {
      name: "tablet-firefox",
      dependencies: ["setup"],
      use: {
        viewport: { width: 768, height: 1024 },
        userAgent:
          "Mozilla/5.0 (Android 10; Tablet; rv:146.0) Gecko/146.0 Firefox/146.0",
        deviceScaleFactor: 2,
        isMobile: false, // not supported in Firefox
        hasTouch: true,
        defaultBrowserType: "firefox",
      },
    },

    /* Desktop configurations targeting 1440px width */
    {
      name: "desktop-chromium",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },

    {
      name: "desktop-firefox",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Firefox"],
        viewport: { width: 1440, height: 900 },
      },
    },

    {
      name: "desktop-webkit",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Safari"],
        viewport: { width: 1440, height: 900 },
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run preview",
    url: "http://localhost:8787",
    reuseExistingServer: !process.env.CI,
  },
});
