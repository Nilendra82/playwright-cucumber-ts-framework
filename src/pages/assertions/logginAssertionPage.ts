import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrappers";

export default class LoginAssertionPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async verifyHomePage() {
        const url = this.page.url();
        expect(url).toContain("/inventory");
    }
}