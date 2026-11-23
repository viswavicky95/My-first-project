import{test} from '@playwright/test';
test('dropdown',async({page})=>{
await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
await page.locator('//button[@data-target="styled-dropdown"]').click();
//first we need to use select locator and then use select options
await page.locator('//select[@class="form-select block w-full mt-1"]').selectOption('option 1');
})
