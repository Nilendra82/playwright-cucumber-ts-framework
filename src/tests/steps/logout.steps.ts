import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { fixture } from "../../hooks/page.fixture";
import LogoutPage from "../../pages/logout.page";
import LogoutAssertionPage from "../../pages/assertions/logout.assertion.page";

setDefaultTimeout(60 * 1000 * 2);

let logoutPage: LogoutPage;
let logoutAssertionPage: LogoutAssertionPage;

When("I logout", async () => {
  console.log("Logging out");
  logoutPage = new LogoutPage(fixture.page);
  logoutPage.clickThreeBarButton();
  logoutPage.clickLogoutButton();
  await new Promise((resolve) => setTimeout(resolve, 2000));
});

Then("I should be logged out successfully", async () => {
  console.log("Step: I should be logged out successfully");
  logoutAssertionPage = new LogoutAssertionPage(fixture.page);
  await logoutAssertionPage.verifyLogoutPage();
  // await new Promise(() => {});
});
