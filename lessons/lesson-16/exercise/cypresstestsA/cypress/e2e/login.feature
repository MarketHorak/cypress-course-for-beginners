Feature: Login

  Scenario: Successful login
    Given the user is on the login page
    When the user enters username
    And the user enters password
    And the user clicks login
    Then the error message 