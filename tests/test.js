import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	const headerTextSelector = 'header h1';
	expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('watch');
	expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('shop');
	expect((await page.textContent(headerTextSelector)).toLowerCase()).toContain('london');
});
