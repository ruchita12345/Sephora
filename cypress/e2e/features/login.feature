Feature: E2E scenario for Login

Scenario: Verify Login functionality
    Given I am on the homepage of the website "https://www.sephora.ae/en/sign-in"
    When I enter email id "ruch.solanki@gmail.com"
    When I click on OK CTA
    When I enter password "Adidas@123"
    When I click on Continue CTA
    Then I verify if user is logged in and account name is "Hello Ruchita!"