Feature: Test end to end Ecommerce test validation

    Application Regression

    @Smoke21
    Scenario: Test login functinlity
    Given I open mynotebook login page
    And I enter username and password in login screen
    |username|password| 
    |mis1@hacker.com|New@1234|
    Then I click on login button