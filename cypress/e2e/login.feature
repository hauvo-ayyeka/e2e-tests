Feature: home.ayyeka.com
  Scenario: visiting the frontpage
    Given I am "Hau"
    When I visit staging site
    Then I enter my credentials and login
    Then I should see the home page