import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { fixture } from "../../hooks/page.fixture";
import AddToCartPage from "../../pages/addtocart.page";
import AddToCartAssertionPage from "../../pages/assertions/addtocart.assertion.page";

setDefaultTimeout(60 * 1000 * 2);

let addToCartPage: AddToCartPage;
let addToCartAssertionPage: AddToCartAssertionPage;

Then("I should see Add to cart button is visible", async () => {
  addToCartAssertionPage = new AddToCartAssertionPage(fixture.page);
  await addToCartAssertionPage.assertAddToCart();
  // await new Promise(() => {});
});
