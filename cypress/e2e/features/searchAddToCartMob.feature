Feature: E2E scenario for Search and Add to Cart Mobile View on iPhone 6

Background:
    Given I am on iPhone 6
    
Scenario: Verify Search and Add to Cart functionality
    Given I am on the homepage of the website "https://www.sephora.ae/"
    When I click on the Search Bar
    When I click on CPopular Search - Benefit cosmetics
    Then I verify the products displayed
    When I go to PDP of My Brow Duo
    Then I verify the price of the product is "150.00 AED"
    When I add the product to Cart and go to the basket
    Then I verify the name of the product added is "Precisely My Brow Duo 4"
    Then I verify the price of the product added is "150.00 AED"
    Then I verify the colour of the product added is "Shade 4 Duo"