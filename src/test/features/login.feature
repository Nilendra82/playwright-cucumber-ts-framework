Feature: Swag Labs Tests

  Background:
    Given I navigate to app

  Scenario Outline: Login
    When I login as "<Username>" and "<Password>"
    Then I should be logged in successfully

    Examples:
      | Username      | Password     |
      | standard_user | secret_sauce |