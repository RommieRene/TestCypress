/// <reference types="cypress" />

const homePage = 'http://automationexercise.com'
describe('Verify that home page is visible successfully', () => {
  beforeEach(() => {
    cy.visit(homePage)
  })

  it('Verify page opens', () => {
    //https://automationexercise.com/
    cy.title().should('include', 'Automation Exercise');
    cy.get(`[alt="Website for automation practice"]`).should("be.visible")
      .get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible')
      .get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible')
      .get(':nth-child(4) > a').should('be.visible')
  })
  it("in sign-up page verify 'New User-Signup' is visible", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.signup-form > h2').should('be.visible')
      .get('[data-qa="signup-name"]').type('Baloo')
      .get('[data-qa="signup-email"]').type('baloofortest@gmail.com')
      .get('[data-qa="signup-button"]').click()
      .get(':nth-child(1) > b').should('be.visible')
      .get('#id_gender1').click()
      .get('[data-qa="password"]').type('testing123')
      .get('[data-qa="days"]').select('9')
      .get('[data-qa="months"]').select('2')
      .get('[data-qa="years"]').select('1994')
      .get('form > :nth-child(7)').should('be.visible')
      .get('form > :nth-child(7)').click()
      .get('form > :nth-child(8)').should('be.visible')
      .get('form > :nth-child(8)').click()
      .get('[data-qa="first_name"]').type('Baloo')
      .get('[data-qa="last_name"]').type('Escobar')
      .get('[data-qa="company"]').type('Bli bel')
      .get('[data-qa="address"]').type('Dgine Dgin street 12 ')
      .get('[data-qa="address2"]').type('Dgine Dgen street 12')
      .get('[data-qa="country"]').select('Singapore')
      .get('[data-qa="state"]').type('Jungle')
      .get('[data-qa="city"]').type('Honey')
      .get('[data-qa="zipcode"]').type('5263')
      .get('[data-qa="mobile_number"]').type('+54853225')
      .get('[data-qa="create-account"]').click();
    cy.contains("ACCOUNT CREATED!").should("be.visible")
      .get(':nth-child(10) > a').should('be.visible')
      .get('.shop-menu > .nav > :nth-child(5) > a').click()
      .get('b').should('be.visible')
      .get('[data-qa="continue-button"]').click()

  })

})








