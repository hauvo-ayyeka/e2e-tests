Feature: home.ayyeka.com
  Scenario: visiting the frontpage
    Given I am "Hau"
    When I visit ayyeka site
    Then I enter my credentials and login
    Then I should see the home page