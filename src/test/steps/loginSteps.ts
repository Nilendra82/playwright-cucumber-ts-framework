import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import LogginAssertionPage from "../../pages/assertions/logginAssertionPage";

setDefaultTimeout(60 * 1000 * 2)

let loginPage: LoginPage;
let logginAssertionPage: LogginAssertionPage;

Given('I navigate to app', async () => {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("App is launched");
})

When('I login as {string} and {string}', async (username, password) => {
    loginPage = new LoginPage(fixture.page);
    loginPage.logginToApp(username, password);
    await new Promise(resolve => setTimeout(resolve, 2000));
});

Then('I should be logged in successfully', async () => {
    logginAssertionPage = new LogginAssertionPage(fixture.page);
    logginAssertionPage.verifyHomePage();
    // await new Promise(() => {});
})