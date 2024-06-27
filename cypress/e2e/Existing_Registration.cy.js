/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('http://automationexercise.com')
    })


    describe('.should() - Verify that home page is visible successfully', () => {
        it('.should() - Verify page opens', () => {
            //https://automationexercise.com/
            cy.title().should('include', 'Automation Exercise')
                .get('header .logo').should('be.visible')
                .get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible')
                .get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible')
                .get(':nth-child(4) > a').should('be.visible')
        })
        it("in sign-up page verify 'New User-Signup' is visible", () => {
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
                .get('.signup-form > h2').should('be.visible')
                .get('[data-qa="signup-name"]').type('Pablo')
                .get('[data-qa="signup-email"]').type('testforpablo@gmail.com')
                .get('[data-qa="signup-button"]').click()
                .get('.signup-form > form > p').should('be.visible')

        })
    })
})