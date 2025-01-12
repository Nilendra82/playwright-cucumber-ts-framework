import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/playwright.wrappers";
import { fixture } from "../../hooks/page.fixture";

export default class AddToCartAssertionPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    addToCart: "#add-to-cart-sauce-labs-backpack",
  };

  async assertAddToCart() {
    try {
      const text = await this.page.locator(this.Elements.addToCart).innerText();
      expect(text).toEqual("Add to cart"); // This will throw an error if the condition is not met
      fixture.logger.info("Add to cart button is visible");
    } catch (error) {
      fixture.logger.error(
        "Assertion failed in assertAddToCart: " + error.message
      );
      throw new Error("AddToCart page assertion failed: " + error.message); // Explicitly throw the error
    }
  }
}
