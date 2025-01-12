import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwright.wrappers";

export default class AddToCartPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    addToCart: "#add-to-cart-sauce-labs-backpack",
  };
}
