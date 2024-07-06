import { SearchProductAndAddToCartPage } from '../page-objects/searchProductAndAddToCartPage';

import {
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

const searchProductAndAddToCartPage = new SearchProductAndAddToCartPage();

When(/^I click on the Search Bar$/, () => {
    searchProductAndAddToCartPage.clickOnSearchBar();
});

When(/^I click on CPopular Search - Benefit cosmetics$/, () => {
	searchProductAndAddToCartPage.clickOnBenefitsCosmetic();
});

Then(/^I verify the products displayed$/, () => {
	searchProductAndAddToCartPage.verifyProductsDisplayed();
});

When(/^I go to PDP of My Brow Duo$/, () => {
	searchProductAndAddToCartPage.clickOnMyBroDuo();
});

Then(/^I verify the price of the product is "([^"]*)"$/, (price) => {
	searchProductAndAddToCartPage.verifyPriceOfProduct(price);
});

When(/^I add the product to Cart and go to the basket$/, () => {
	searchProductAndAddToCartPage.goToCartAndBasket();
});

Then(/^I verify the name of the product added is "([^"]*)"$/, (productName) => {
	searchProductAndAddToCartPage.verifyAddedProductName(productName);
});

Then(/^I verify the price of the product added is "([^"]*)"$/, (productPrice) => {
	searchProductAndAddToCartPage.verifyAddedProductPrice(productPrice);
});

Then(/^I verify the colour of the product added is "([^"]*)"$/, (productColor) => {
	searchProductAndAddToCartPage.verifyAddedProductColour(productColor);
});

When(/^I add the product to Cart$/, () => {
	searchProductAndAddToCartPage.clickOnAddToCart();
});

When(/^I click on Basket$/, () => {
	searchProductAndAddToCartPage.clickOnBasket();
});


