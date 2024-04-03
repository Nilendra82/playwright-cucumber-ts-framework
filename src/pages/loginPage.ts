import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LoginPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        username: "#user-name",
        password: "#password",
        loginBtn: "#login-button",
    }

    async enterUserName(username: string) {
        await this.page.locator(this.Elements.username).fill(username);
    }
    async enterPassword(password: string) {
        await this.page.locator(this.Elements.password).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.Elements.loginBtn).click()
    }

    async logginToApp(username: string, password: string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}