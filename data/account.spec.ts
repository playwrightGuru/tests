import { test, expect } from "@playwright/test";

test.describe ('Account page', () => {
    
    

    //test.beforeEach ( async ({ page }) => {
    //test.beforeAll ( async ({ browser }) =>  {
//page = await browser.newPage()

        //await page.goto ('https://practice.sdetunicorns.com/my-account')
        //await page.locator('#username').fill('MyTesterAccount123')
        //await page.locator('#password').fill('MyTestAccountPass123')
        //await page.locator('[value="Log in"]').click()
        //await page.locator(`li a[href*="https://practice.sdetunicorns.com/my-account/customer-logout/?_wpnonce=b85e725748"]`).isVisible()
    

    test('Access Orders', async ({page}) => {
        await page.goto ('https://practice.sdetunicorns.com/my-account')
        await page.locator(`li a[href*='Orders']`).click()
        //await page.locator (`li a[href*="https://practice.sdetunicorns.com/my-account/orders"]`).click()
        await expect(page).toHaveURL(/.*orders/)
        
    });
    
    test('Access Downloads', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/my-account')
        await page.locator(`li a[href*='Downloads']`).click()
        //await page.locator (`li a[href*='https://practice.sdetunicorns.com/my-account/downloads']`).click()
        await expect (page).toHaveURL(/.*downloads/)
        
    });
});

test.describe('Account Page', () => {
    test.use({ storageState: 'notLoggedInState.json' })
    test('Verify login and register is visible', async ({ page }) => {
      await page.goto('https://practice.sdetunicorns.com/my-account')
      await expect(page.locator('form[class*="login"]')).toBeVisible()
      await expect(page.locator('form[class*="register"]')).toBeVisible()
    });
  })
