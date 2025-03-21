import {test, expect} from "@playwright/test";
import CartPage from "./pages/cart.page";
const path = require ('path');

test.describe('Upload file', () => {
    let cartPage: CartPage;

    //test('should upload a test file', async ({ page }) => {
        //cartPage = new CartPage (page);
    
        const fileName = ['Boots_3.jpg', 'Boots_3_2.jpg']
        for (const name of fileName) {

test (`should upload a ${name} file`, async ({ page }) => {
    cartPage = new CartPage (page);

        //open URL in question
        await page.goto ('http://practice.sdetunicorns.com/cart/');

        //provides the test file path
        const filePath = path.join (__dirname, `../data/${name}`);

        await page.waitForTimeout(120_000);

        //DOM manipulation
    //await page.evaluate(() => {
        //const selector = document.querySelector('input#upfile_1');
        //if (selector) {
        //.className = ''
        /*await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
            selector.className = ''
            }
        })
        //upload test file
        //await page.setInputFiles ('input#upfile_1', filePath);*/
        cartPage.uploadComponent().uploadFile(filePath);

        //click submit button
        //await page.locator ('#upload_1').click();

        //assertion
        //const successMessage = await page.locator('text = uploaded successfully');
        //await expect(successMessage).toBeVisible();
        //await expect (page.locator('#wfu_messageblock_header_1_1'))
        //.toContainText('uploaded successfully');
        await expect (cartPage.uploadComponent().successTxt)
        .toContainText('uploaded successfully', {timeout: 10000});

})

        }

test.skip('should upload a test file on a hidden input field', async ({ page }) => {
    //cartPage = new CartPage (page);

cartPage = new CartPage (page);

    //open URL in question
    await page.goto ('http://practice.sdetunicorns.com/cart/');

    //provides the test file path
    const filePath = path.join (__dirname, `../data/Boots_3.jpg`);

    await page.waitForTimeout(120_000);

    //DOM manipulation
    //await page.evaluate(() => {
        //const selector = document.querySelector('input#upfile_1');
        //if (selector) {
        //.className = ''
        //await page.evaluate(() => {
            //const selector = document.querySelector('input#upfile_1');
            //if (selector) {
            //selector.className = ''


    //upload test file
    //await page.setInputFiles ('input#upfile_1', filePath); //throws error

    //click submit button
    //await page.locator ('#upload_1').click();

    //assertion
    //const successMessage = await page.locator('text = uploaded successfully');
    //await expect(successMessage).toBeVisible();
    //await expect (page.locator('#wfu_messageblock_header_1_1'))
    //.toContainText('uploaded successfully');
    

    //open URL in question
    //await page.goto ('http://practice.sdetunicorns.com/cart/');

    //provides the test file path
    //const filePath = path.join (__dirname, '../data/Boots_3.jpg');

    //await page.waitForTimeout(120_000);

    //upload test file
    //await page.setInputFiles ('input#upfile_1', filePath);
    cartPage.uploadComponent().uploadFile(filePath);

    //click submit button
    //await page.locator ('#upload_1').click();

    //assertion
    //const successMessage = await page.locator('text = uploaded successfully');
    //await expect(successMessage).toBeVisible();
    //await expect (page.locator('#wfu_messageblock_header_1_1'))
    //.toContainText('uploaded successfully');
    await expect (cartPage.uploadComponent().successTxt)
    .toContainText('uploaded successfully', {timeout: 10000});

})

})

        
