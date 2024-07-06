
const locators = {
    checkoutCTA: '.cart-summary-content button',
    homeDelivery: 'label[for="shipping-method-group-homedelivery"] .shipping-method-group',
    pickupPointCollection: 'label[for="shipping-method-group-collectionpoint"] .shipping-method-group'
    }
    
    export class CheckoutPage {
        clickOnCheckoutCTA() {
            cy.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from failing the test
                console.log('Test-specific uncaught exception:', err);
                return false;
            });
            
            try {
                cy.get(locators.checkoutCTA).click();
              } catch (error) {
                cy.log('Error:', error.message);
              }
        }
        
       verifyDeliveryOption1(deliveryOption1) {
            cy.get(locators.homeDelivery).invoke('text').then((text) => {
            expect(text.trim()).to.equal(deliveryOption1);
        });
       }
      
        verifyDeliveryOption2(deliveryOption2) {
            cy.get(locators.pickupPointCollection).invoke('text').then((text) => {
                expect(text.trim()).to.equal(deliveryOption2);
            });
       }
    }