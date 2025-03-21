import {test, expect} from "@playwright/test";
import ContactPage from "./pages/contact.page";
import {faker} from "@faker-js/faker";

test.describe.only ('Home', () => {

    let contactPage: ContactPage;


test('Access contact page, fill in the form, submit it and assert success message', async ({ page }) => {

    contactPage = new ContactPage(page);
    page.pause();


    //test.setTimeout (500000);

    //open url in question
    await contactPage.navigate ();

    await page.pause ();

    await contactPage.submitForm (faker.person.firstName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs());
    
    //'James Bond','jbond@outlook.com', '012345678', 'I would like to succeed in Playwright'

    //type name into name field
    //await contactPage.nameField.fill('James Bond');s

    //type email into email field
    //await contactPage.emailField.fill('jbond@outlook.com');

    //type phone into phone field
    //await contactPage.phoneField.fill('123456789');

    //type message into message field
    //await contactPage.messageField.pressSequentially('I would like to succeed in Playwright');

    //add a soft assertion
    //await expect.soft(page.locator('#evf-277-field_yhGx3FOwr2-4')).toHaveText ("Fail text");


    //click submit button
    //await contactPage.submitBtn.click();

    //expect(test.info().errors.length).toBeLessThan(1);

    //find text locator
    const successMessage = await contactPage.successMsg;

    //assert the success message
    await expect(contactPage.successMsg).toBeVisible();


    
})


})