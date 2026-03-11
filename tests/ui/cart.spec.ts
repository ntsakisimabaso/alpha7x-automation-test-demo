import { test, expect } from '@playwright/test';

test('alpha7x add item to cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');

  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  const cartBadge = page.locator('.shopping_cart_badge');

  await expect(cartBadge).toHaveText('1');

});