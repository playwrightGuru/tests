import { test, expect } from "@playwright/test";
import HomePage from "./pages/home.page";

test.describe('Home', () => {

    let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage (page);
    await homePage.navigate();
    
})


    test("Open HomePage and verify title", async ({ page }) => {
    //homePage = new HomePage (page);

        //open url
        //await page.goto ('https://practice.sdetunicorns.com');
        //await homePage.navigate();

        //verify title
      expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        
    })

        test('Open About Page and verify title', async ({page}) => {
            //homePage = new HomePage(page);

    // open url
    //await page.goto ('https://practice.sdetunicorns.com/about/');
    //await homePage.navigate();
    
    //verify title
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    
        })

        test ('Click Get Started button using CSS Selector', async ({page}) => {
            //homePage = new HomePage(page);

            // open url
            //await page.goto ('https://practice.sdetunicorns.com');
            //await homePage.navigate();

            //verify URL doesnt have "get-started"
            await expect(page).not.toHaveURL(/.*#get-started/);

            //click the button
            //await page.locator('#get-started').click();

             await homePage.getStartedBtn.click();
    
            
            
            //verify URL has "get-started"
            //await expect(page).toHaveURL ('https://practice.sdetunicorns.com/#get-started');
            await expect(page).toHaveURL(/.*#get-started/);
            
                })

                test ('Verify heading text is visible using text selector', async ({page}) => {

                    //homePage = new HomePage(page);
                    // open url
                    //await page.goto ('https://practice.sdetunicorns.com');
                    //await homePage.navigate();
        
                    //find text locator
                    //const headingText = await page.locator('text=Think different. Make different.');
                    const headingText = await homePage.headingText;
                    //await homePage.headingText();
                    
                    //verify heading text is visible
                    //await expect(page).toHaveURL ('https://practice.sdetunicorns.com/#get-started');
                    
                    await expect(headingText).not.toBeHidden();
                    await expect(headingText).toBeVisible ();
                    
                        })


                        test ('Verify home link is enabled using text and css selector', async ({page}) => {
                            //homePage = new HomePage(page);

                            // open url
                            //await page.goto ('https://practice.sdetunicorns.com');
                            //await homePage.navigate();
                
                            //find text locator
                            //const homeText = await page.locator('#zak-primary-menu >> text=Home');
                            //const homeText = await page.locator('#zak-primary-menu:has-text("Home")');\
                            const homeText = await homePage.homeText;
                 
                            
                            //verify home text is enabled
                            await expect(homeText).toBeEnabled();
                            
                                })

        test ('Verify search icon is visible using xpath selector', async ({page}) => {
            //homePage = new HomePage(page);

             // open url
             //await page.goto ('https://practice.sdetunicorns.com');
             //await homePage.navigate();
                        
             //find contact icon
             //const homeText = await page.locator('#zak-primary-menu >> text=Home');
             //const contactIcon = await page.locator('//ul[@id="zak-primary-menu"]//a[@href="https://practice.sdetunicorns.com/contact/"]');
            const contactIcon = await homePage.contactIcon;      
                                    
             //verify contact icon is visible
          await expect(contactIcon).toBeVisible();
                                    
            })
        
        
            test ('Verify text for all nav links', async ({page}) => {
                //homePage = new HomePage(page);
            

                const expectedLinks = [
                "Home",
                "About",
                "Shop",
                "Blog",
                "Contact",
                "My account",
            ];


                // open url
                //await page.goto ('https://practice.sdetunicorns.com');
                //await homePage.navigate();
                           
                //find the nav links
                //const homeText = await page.locator('#zak-primary-menu >> text=Home');
                //const navLinks = await page.locator('#zak-primary-menu li[id*=menu]').nth(3);
                //const navLinks = await page.locator('#zak-primary-menu li[id*=menu]');
                //const navLinks = await homePage.navLinks;

                //print out all the links
                //for (const el of await navLinks.elementHandles()) {
                    //console.log(await el.textContent())
                //}
        
                           
                                       
                //verify nav links text
                //expect(await navLinks.allTextContents()).toEqual(expectedLinks);
                //expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
                expect(await homePage.getNavLinksText()).toEqual(expectedLinks);

               })

    })