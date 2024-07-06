const locators = {
    searchBar: '.language-search-wrapper input.fake-search-input',
    benefitsCosmetics: '.search-popular ul li:nth-child(1) a',
    productCount: '#search-result-items li.grid-tile',
    myBroDuo: '#search-result-items li.grid-tile:nth-child(1) .product-info-wrapper',
    pdpProductPrice: '.price-block-right .price-sales.price-sales-standard',
    bubbleGumColour: 'a[title="Bubblegum"]',
    addToCartCTA: '#add-to-cart',
    goToBasket: '.buttons-section .button.secondary-button-revamp',
    productNameAdded: '.name',
    productPriceAdded: '.product-sales-price',
    productColourAdded: '.value.bidirectional',
    basket: '.top-right a[title="Basket"]',
    }
    
    export class SearchProductAndAddToCartPage {
        clickOnSearchBar() {
            cy.wait(2000);
            cy.get(locators.searchBar).click({force: true});
        }
        
        clickOnBenefitsCosmetic() {
            cy.get(locators.benefitsCosmetics).click();
        }
        
        verifyProductsDisplayed() {
            cy.get(locators.productCount).then($items => {
                expect($items).to.have.length(24);
              });
        }
        
        clickOnMyBroDuo() {
            cy.get(locators.myBroDuo).click();
        }
        
        verifyPriceOfProduct(price) {
            cy.get(locators.pdpProductPrice).invoke('text').then((text) => {
                expect(text.trim()).to.contain(price);
              });
        }
        
        changeColorToBubblegum() {
            cy.get(locators.bubbleGumColour).click();
        }
        
        goToCartAndBasket() {
            cy.wait(2000);
            cy.get(locators.addToCartCTA).click();
            cy.wait(2000);
            cy.get(locators.goToBasket).click();
        }

        clickOnAddToCart() {
            cy.get(locators.addToCartCTA).click();
        }

        clickOnBasket() {
            cy.get(locators.basket).click();
        }
        
        verifyAddedProductName(productName) {
            cy.get(locators.productNameAdded).invoke('text').then((text) => {
                expect(text.trim()).to.equal(productName);
            });
        }
        
        verifyAddedProductPrice(productPrice) {
            cy.get(locators.productPriceAdded).invoke('text').then((text) => {
                expect(text.trim()).to.equal(productPrice);
            });
        }
        
        verifyAddedProductColour(productColor) {
            cy.get(locators.productColourAdded).invoke('text').then((text) => {
                expect(text.trim()).to.equal(productColor);
            });
        }
    }