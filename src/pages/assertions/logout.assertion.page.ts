import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/playwright.wrappers";
import { fixture } from "../../hooks/page.fixture";

export default class LogoutAssertionPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  async verifyLogoutPage() {
    try {
      const url = this.page.url();
      expect(url).toEqual("https://www.saucedemo.com/"); // This will throw an error if the condition is not met
      fixture.logger.info("User is logged out successfully");
    } catch (error) {
      fixture.logger.error(
        "Assertion failed in verifyLogoutPage: " + error.message
      );
      throw new Error("Logout page verification failed: " + error.message); // Explicitly throw the error
    }
  }
}
