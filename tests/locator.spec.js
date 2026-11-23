import {test} from '@playwright/test';
test('open amazon',async({page})=>{
//await page.goto('https://www.amazon.in/');
// #-> id
//.->class
//[attribute=value]->css
//tag[attribute=value]->css
// contains:[att *=value]->css
//tag[attribute *=value]->css
//starts-with:[att ^=”value”]->css
//ends with: [att $=”value”]-> css


await page.locator('#twotabsearchtextbox').fill('iphone');
await page.locator('#nav-search-submit-button').click();
await page.locator('#twotabsearchtextbox').fill('shoes');
await page.locator('#nav-search-submit-button').click();
await page.locator("[alt='Sponsored Ad - Campus Men Vayu Walking Shoes']").click();
})
test('demosite',async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill('Vicky');
    await page.locator('#userEmail').fill('vicky@yahoo.com');
    await page.locator('#currentAddress').fill('chennai');
    await page.locator('#permanentAddress').fill('chennai');
    await page.locator('#submit').click();
        
})