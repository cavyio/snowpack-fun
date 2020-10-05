Feature: App

  Scenario Outline: A user enters "rolandquast" into the username field
    Given A user is at the form input page using <Browser>
    When A user enters "rolandquast" into the username field
    Then The username field should contain the value "rolandquast"
    Examples:
      | Browser  |
      | chromium |
      | firefox  |