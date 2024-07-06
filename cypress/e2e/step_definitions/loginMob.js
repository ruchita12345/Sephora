import { LoginPageMob } from '../page-objects/loginPageMob';

import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

const loginPageMob = new LoginPageMob();

Given(/^I am on iPhone 6$/, () => {
    loginPageMob.gotoiPhone6();
});

