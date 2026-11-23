import { test } from '@playwright/test';

test('open amazon', async ({ page }) => {
    await page.goto('https://www.amazon.com');
    const title = await page.title();
    const url = page.url();

    console.log(title);
    console.log(url);

    await page.screenshot({
        path: 'c:/screenshot/amazon.jpeg',
        fullPage: true
    });

    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(3000);
    await page.goBack();
    await page.goForward();
    await page.reload();
    console.log(projde);
    console.log(project);
    console.log(title);
    
});