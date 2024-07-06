import { CheckoutPage } from '../page-objects/checkoutPage';

import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

const checkoutPage = new CheckoutPage();

When(/^I click on Checkout CTA$/, () => {
    checkoutPage.clickOnCheckoutCTA();
});

Then(/^I verify the delivery option 1 "([^"]*)"$/, (deliveryOption1) => {
    checkoutPage.verifyDeliveryOption1(deliveryOption1);
});

Then(/^I verify the delivery option 2 "([^"]*)"$/, (deliveryOption2) => {
	checkoutPage.verifyDeliveryOption2(deliveryOption2);
});