import { expect, test } from '@playwright/test';

test.describe('index page header', () => {
	test('has expected h1', async ({ page }) => {
		await page.goto('/');
		const headerTextSelector = 'header h1';
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('watch');
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('shop');
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('london');
	});

	test('has hamburger and cart icons', async ({ page }) => {
		await page.goto('/');
		console.log('count object', await page.locator('header img.hamburger').count());
		expect(await page.locator('header img.hamburger').count()).toEqual(1);
		expect(await page.locator('header img.cart').count()).toEqual(1);
	});
});
