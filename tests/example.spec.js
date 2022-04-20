const { test, expect } = require('@playwright/test');

test.describe('Test Home Page', () => {
  test('Home page must contain text hello world', async ({ page }) => {
    await page.goto('/')
    
    const text = await page.locator('body').innerText();
    
    await expect(text).toEqual('Hello World!');

  });
});