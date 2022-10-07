import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep("I am {string}", function (name: string) {
  cy.fixture(`users/${name.toLowerCase()}.json`).then((user) => {
    expect(user, 'is not null').to.be.not.null
    this.setUser(user)
  })
  
})

defineStep('I visit ayyeka site', () => {
  cy.visit("https://home-stage-v2.ayyeka.com/");
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
  cy.get('#OwnerApp_0', { timeout: 1000 * 180 }).should('be.visible')
  cy.get('#AppHeader_0 > div.dojoxExpandoWrapper > div > div.navBodyLeading > img', { timeout: 1000 * 180 }).should('be.visible')
})