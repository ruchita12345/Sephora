const locators = {
  loginLink: '#header-item-account .header-link-wrapper a',
  addressEmail: '#dwfrm_crmsephoracard_email',
  okCTA: 'button[name="dwfrm_crmsephoracard_confirm"]',
  passwordfield: 'input[id*=dwfrm_login_password]',
  continueCTA: '#loginSubmit', 
  accountName: '#secondary div.account-left-text'
  }
  
  export class Login {
    gotoWebUrl(webUrl) {
      cy.visit(webUrl);
    }
  
    clickOnLoginLink() {
      cy.get(locators.loginLink).click();
    }

    enterEmailID(emailId) {
      cy.get(2000);
      cy.get(locators.addressEmail).type(emailId);
      cy.get(2000);
    }

    clickOnOKCTA() {
      cy.get(2000);
      cy.get(locators.okCTA).click();
    }
    
    verifyOKCTAIsDisabled() {
      cy.get(location.okCTA).should('be.disabled');
    }
    
    enterPassword(password) {
      cy.get(2000);
      cy.get(locators.passwordfield).type(password);  
    }
    
    clickOnContinueCTA() {
      cy.get(locators.continueCTA).click();
    }
    
    verifyAccountName(name) {
      cy.get(locators.accountName).invoke('text').then((text) => {
        expect(text.trim()).to.equal(name);
      });
    }
  }