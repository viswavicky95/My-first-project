import { test, chromium } from '@playwright/test';

test('title', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto('https://www.flipkart.com');
    await page2.goto('https://www.instagram.com');

    
});