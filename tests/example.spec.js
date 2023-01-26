// @ts-check
const { test, expect } = require('@playwright/test');
const { projects } = require('../playwright.config');

test.describe("Suite Name", () => {

  // Adding the Local configuration inside the test.describe
  test.use({
    baseURL: "https://playwright.dev/",
    viewport: { width: 900, height: 900 },
    colorScheme: 'dark'
  });

  test('Homepage has title and links to intro page', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // create a locator
    const getStarted = page.getByRole('link', { name: 'Get started' });

    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/docs/intro');

    // Click the get started link.
    await getStarted.click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });

  test('Homepage fails to verify Title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright Title/);
  });
});