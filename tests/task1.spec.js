import{test} from'@playwright/test'
test('open flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com');
    await page.title();
    await page.url();
    await page.goto('https://www.instagram.com');
    await page.title();
    await page.url();
    await page.goBack();
    await page.url();


})

test('open amazon',async({page})=>{
    await page.goto('https://www.amazon.com');
    await page.url();
    await page.goto('https://www.makeMyTrip.com');
    await page.title(); 
    await page.goto('https://www.Facebook.com');
    await page.goBack();
    await page.goBack();

})