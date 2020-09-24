Feature: Logging in

Scenario: Entering a correct user id and password
    Given I have previously created a user id and password
    When I enter my user id and password correctly    
    Then I should be granted access