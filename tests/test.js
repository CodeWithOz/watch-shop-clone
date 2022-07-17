import { expect, test } from '@playwright/test';

/**
 * @type {import('@playwright/test').ViewportSize}
 */
const mobileViewportDims = {
	// slighty bigger than pixel XL size, to cover that and smaller mobile devices
	height: 830,
	width: 420
};

/**
 * @type {import('@playwright/test').ViewportSize}
 */
const defaultViewportDims = {
	// corresponds to mid-sized pc display
	height: 720,
	width: 1280
};

test.describe('index page header', () => {
	test('has expected h1', async ({ browser }) => {
		const page = await browser.newPage();
		await page.setViewportSize(mobileViewportDims);
		await page.goto('/');
		const headerTextSelector = 'header h1';
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('watch');
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('shop');
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('london');
	});

	test('has cart icon', async ({ page }) => {
		await page.goto('/');
		expect(await page.locator('header img.cart').count()).toEqual(1);
	});

	test('has hamburger icon on mobile only', async ({ browser }) => {
		const page = await browser.newPage();
		await page.setViewportSize(mobileViewportDims);
		await page.goto('/');
		expect(await page.locator('header img.hamburger').isVisible()).toEqual(true);
		await page.setViewportSize(defaultViewportDims);
		await page.goto('/');
		expect(await page.locator('header img.hamburger').isVisible()).toEqual(false);
	});
});
