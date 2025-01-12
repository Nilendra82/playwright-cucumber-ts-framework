import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/playwright.wrappers";
import { fixture } from "../../hooks/page.fixture";

export default class LoginAssertionPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  async verifyHomePage() {
    try {
      const url = this.page.url();
      expect(url).toContain("/inventory"); // This will throw an error if the condition is not met
      fixture.logger.info("User is logged in successfully");
    } catch (error) {
      fixture.logger.error(
        "Assertion failed in verifyHomePage: " + error.message
      );
      throw new Error("Home page verification failed: " + error.message); // Explicitly throw the error
    }
  }
}
