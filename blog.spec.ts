import {test, expect} from "@playwright/test";
import BlogPage from "./pages/blog.page";

test.describe ('Home', () => {

let blogPage: BlogPage;


test('Access blog page, verify the number of posts, verify min char length', async ({ page }) => {

    blogPage = new BlogPage (page);

    
    
    
    /*const expectedPosts = [
        "IFrame Sample",
        "Successful Marketing Ads for Your Business",
        "Let’s Building Your Business from Scratch",
        "The Best Place to Invest Your Money",
        "The Big Seminar for Your Right Investment",

    ];*/

    //test.setTimeout (500000);

    //open url in question
    await blogPage.navigate();

    //get the recent post list elements
    //const blogPosts = await blogPage.posxtList;

    //loop through the list and assert the char length >10
    for (const el of await blogPage.postList.elementHandles()) {
        expect ((await el.textContent())!.trim().length).toBeGreaterThan(10);
    }

    //assert the total length = 5
    expect (await blogPage.postList.count()).toEqual(5);


    //find text locators for each individial post
    //const post1st = await page.locator('text = IFrame Sample');
    //const post2nd = await page.locator('text = Successful Marketing Ads for Your Business');
    //const post3rd = await page.locator('text = Let’s Building Your Business from Scratch');
    //const post4th = await page.locator('text = The Best Place to Invest Your Money');
    //const post5th = await page.locator('text = The Big Seminar for Your Right Investment');

    //get count of items
    /*const count = await blogPosts.count();
    //expect(count).toBeGreaterThan(10);*/

    //check each item's text length
    /*for (let i=0; i < count; i++) {
        const text = await blogPosts.nth(i).textContent();
        expect(text?.trim().length).toBeGreaterThan(10);
    }*/
    
})


})