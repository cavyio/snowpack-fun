Feature: App

  Scenario: A user enters "rolandquast" into the username field
    Given A user is at the form input page
    When A user enters "rolandquast" into the username field
    Then The username field should contain the value "rolandquast"