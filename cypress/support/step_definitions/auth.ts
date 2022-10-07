import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep("I am {string}", function (name: string) {
  console.log('this:', this)
  cy.fixture(`users/${name.toLowerCase()}.json`).then((user) => {
    expect(user, 'is not null').to.be.not.null
    this.setUser(user)
  })
  
})

defineStep('I visit ayyeka site', () => {
  cy.visit("https://home.ayyeka.com/");
})

defineStep('I enter my credentials and login', function() {
  cy.get("#username").should('be.visible') 
  cy.get("#Password").should('be.visible') 

  cy.get('#username').type(this.user.email)
  cy.get('#Password').type(this.user.password)
  cy.get('form').submit()
})

defineStep('I should see the home page', () => {
  cy.url().should('include', 'Home/Index');
})