import { Page, Locator} from "@playwright/test";


class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeText: Locator;
    contactIcon: Locator;
    navLinks: Locator;
constructor (page: Page) {
this.page = page;
this.getStartedBtn = page.locator('#get-started');
this.headingText = page.locator('text=Think different. Make different.');
this.homeText = page.locator('#zak-primary-menu:has-text("Home")');
this.contactIcon = page.locator('//ul[@id="zak-primary-menu"]//a[@href="https://practice.sdetunicorns.com/contact/"]');
this.navLinks = page.locator('#zak-primary-menu li[id*=menu]');


}

async navigate() {

    await this.page.goto ('https://practice.sdetunicorns.com');
}

getNavLinksText() {

    return this.navLinks.allTextContents();
}

}

export default HomePage;

