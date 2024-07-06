import { Login } from '../page-objects/loginPage';

import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

const login = new Login();

Given(/^I am on the homepage of the website "([^"]*)"$/, (webURL) => {  
    login.gotoWebUrl(webURL);
});

When(/^I enter email id "([^"]*)"$/, (emailId) => {
	login.enterEmailID(emailId);
});

When(/^I click on OK CTA$/, () => {
	login.clickOnOKCTA();
});

Then(/^I verify that OK CTA is disabled$/, () => {
	login.verifyOKCTAIsDisabled();
});

When(/^I enter password "([^"]*)"$/, (password) => {
	login.enterPassword(password);
});

When(/^I click on Continue CTA$/, () => {
	login.clickOnContinueCTA();
});

Then(/^I verify if user is logged in and account name is "([^"]*)"$/, (accountName) => {
	login.verifyAccountName(accountName);
});
