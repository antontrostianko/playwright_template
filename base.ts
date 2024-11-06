import { test as base } from "@playwright/test";
import BasePage from "./pages/BasePage";

type MyFixtures = {
    BasePage: BasePage;
};

export const test = base.extend<MyFixtures>({
    BasePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
});
