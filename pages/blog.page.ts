import { Page, Locator} from "@playwright/test";


class BlogPage {
page: Page;
    postList: Locator;

    
constructor (page: Page) {
this.page = page;
this.postList = page.locator ('#recent-posts-3 ul li');



}

async navigate() {

    await this.page.goto ('https://practice.sdetunicorns.com/blog');
}

}

export default BlogPage;