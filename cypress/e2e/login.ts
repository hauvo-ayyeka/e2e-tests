import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit home.ayyeka.com", () => {
  cy.visit("https://home.ayyeka.com/");
});

Then("I should see a username input", () => {
  cy.get("#username").should(
    "have.attr",
    "placeholder",
    "Username"
  );
});