import { Page, Locator} from "@playwright/test";


class ContactPage {
page: Page;
nameField: Locator;
    emailField: Locator;
    phoneField: Locator;
    messageField: Locator;
    successMsg: Locator;
    submitBtn: Locator;
    
constructor (page: Page) {
this.page = page;
this.nameField = page.locator ('#evf-277-field_ys0GeZISRs-1');
this.emailField = page.locator('#evf-277-field_LbH5NxasXM-2');
this.phoneField = page.locator('#evf-277-field_66FR384cge-3');
this.messageField = page.locator('#evf-277-field_yhGx3FOwr2-4');


//await this.page.waitForTimeout(5000);

this.submitBtn = page.locator ('#evf-submit-277');
this.successMsg = page.locator('text = Thanks for contacting us!');


}

async navigate() {

    await this.page.goto ('https://practice.sdetunicorns.com/contact');
}

async submitForm(name: string, email: string, phone: string, message: string) {

    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.phoneField.fill(phone);
    await this.messageField.fill(message);
    await this.submitBtn.click();

}

}

export default ContactPage;