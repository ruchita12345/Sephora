Feature: E2E scenario for Checkout

Scenario: Verify Checkout functionality
    Given I am on the homepage of the website "https://www.sephora.ae/en/sign-in"
    When I enter email id "ruch.solanki@gmail.com"
    When I click on OK CTA
    When I enter password "Adidas@123"
    When I click on Continue CTA

    When I click on the Search Bar
    When I click on CPopular Search - Benefit cosmetics
    When I go to PDP of My Brow Duo
    When I add the product to Cart and go to the basket

    When I click on Checkout CTA
    Then I verify the delivery option 1 "Home delivery"
    Then I verify the delivery option 2 "Pickup point collection"