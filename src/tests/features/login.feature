@e2e
Feature: Swag Labs Tests

  Background:
    Given I navigate to app

  @smoke
  Scenario Outline: Login
    When I login as "<Username>" and "<Password>"
    Then I should be logged in successfully

    Examples:
      | Username      | Password     |
      | standard_user | secret_sauce |

  Scenario: Add to cart check
    When I login as "standard_user" and "secret_sauce"
    Then I should see Add to cart button is visible
  @smoke 
  Scenario: Logout
    When I login as "standard_user" and "secret_sauce"
    And I logout
    Then I should be logged out successfully
