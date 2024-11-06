import { Locator, Page } from "@playwright/test";

type LocatorMap = {
    [key: string]: Locator;
};

class BasePage {
    readonly page!: Page;

    readonly buttons: LocatorMap = {
        btn1: this.page.locator("btn1"),
        btn2: this.page.locator("btn2"),
    };

    constructor(page: Page) {
        this.page = page;
    }

    async example() {
        await this.buttons.btn1.click();
    }
}

export default BasePage;
