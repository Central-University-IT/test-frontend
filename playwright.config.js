// @ts-check
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests/integration",
  fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: "http://127.0.0.1:8080",
    trace: "on-first-retry",
    testIdAttribute: 'test-id',
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run http-server",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: !process.env.CI,
  },
});
