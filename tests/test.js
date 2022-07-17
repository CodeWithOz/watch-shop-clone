import { expect, test } from '@playwright/test';

test.describe('index page header', () => {
	test('has expected h1', async ({ page }) => {
		await page.goto('/');
		const headerTextSelector = 'header h1';
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('watch');
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('shop');
		expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('london');
	});

	test('has the correct icons', async ({ page }) => {
		await page.goto('/');
		expect(await page.locator('header .header__icon__cart img').count()).toEqual(1);
		expect(await page.locator('header .header__icon__hamburger img').count()).toEqual(1);
		expect(await page.locator('header .header__icon__phone img').count()).toEqual(1);
		expect(await page.locator('header .header__icon__search img').count()).toEqual(1);
		expect(await page.locator('header .header__icon__heart img').count()).toEqual(1);
		expect(await page.locator('header .header__icon__account img').count()).toEqual(1);
	});
});
