/// <reference types="cypress" />
describe("first test for Tesvan Task ", () => {
  it('registeration ', () => {
  cy.visit('https://www.google.com/')
  cy.get('#APjFqb', {timeout: 6000}).type('Automation step by step{enter}')
  cy.wait(3000)
  cy.contains('Տեսանյութեր').click()
  
  })
})