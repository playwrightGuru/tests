import {test, expect} from '@playwright/test'

test('Access blog page, verify the number of posts, verify min char length', async ({ page }) => {

test.setTimeout (500000);

//open url in question
await page.goto('https://practice.sdetunicorns.com/blog/');

//locate all posts
const post1st = await page.locator('text = IFrame Sample');
const post2nd = await page.locator('text = Successful Marketing Ads for Your Business');
const post3rd = await page.locator('text = Let’s Building Your Business from Scratch');
const post4th = await page.locator('text = The Best Place to Invest Your Money');
const post5th = await page.locator('text = The Big Seminar for Your Right Investment');


//verify at least a min number of posts exist
await expect(post1st).toHaveCount(1);
await expect(post2nd).toHaveCount(1);
await expect(post4th).toHaveCount(1);
await expect(post4th).toHaveCount(1);
await expect(post5th).toHaveCount(1);

//verify each post has a min of 10 characters
const count = await post1st.count();
expect(count).toBeGreaterThan(10);

for (let i=0; i < count; i++) {
    const text = await post1st.nth(i).textContent();
    expect(text?.trim().length).toBeGreaterThan(10);

}

console.log('Verified $(count) posts, each with at least 10 characters');


})