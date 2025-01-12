import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { fixture } from "../../hooks/page.fixture";
import LoginPage from "../../pages/login.page";
import LogginAssertionPage from "../../pages/assertions/loggin.assertion.page";

setDefaultTimeout(60 * 1000 * 2);

let loginPage: LoginPage;
let logginAssertionPage: LogginAssertionPage;

Given("I navigate to app", async () => {
  const baseUrl = process.env.BASEURL;
  if (!baseUrl) {
    throw new Error("BASEURL is not defined in the environment variables");
  }
  await fixture.page.goto(baseUrl);
  fixture.logger.info("App is launched");
});

When("I login as {string} and {string}", async (username, password) => {
  console.log(`Step: I login as ${username} and ${password}`);
  loginPage = new LoginPage(fixture.page);
  loginPage.logginToApp(username, password);
  await new Promise((resolve) => setTimeout(resolve, 2000));
});

Then("I should be logged in successfully", async () => {
  console.log("Step: I should be logged in successfully");
  logginAssertionPage = new LogginAssertionPage(fixture.page);
  await logginAssertionPage.verifyHomePage();
  // await new Promise(() => {});
});
