import{test} from '@playwright/test';
test('dropdown',async({page})=>{
await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
await page.locator('//button[@data-target="styled-dropdown"]').click();
//first we need to use select locator and then use select options
// Use a unique locator (e.g., #simple-dropdown select) AND pass { index: 0 } without quotes
await page.locator('#styled-dropdown select').selectOption({ index: 0 });
})

