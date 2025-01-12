import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwright.wrappers";

export default class LogoutPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    threeBar: "#react-burger-menu-btn",
    logout: "#logout_sidebar_link",
  };

  async clickThreeBarButton() {
    await this.page.locator(this.Elements.threeBar).click();
  }

  async clickLogoutButton() {
    await this.page.locator(this.Elements.logout).click();
  }
}
