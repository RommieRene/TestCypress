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
                .get('.login-form > h2').should('be.visible')
                .get('[data-qa="login-email"]').type('testforpablo@gmail.com')
                .get('[data-qa="login-password"]').type('testing123')
                .get('[data-qa="login-button"]').click()
                .get(':nth-child(10) > a').should('be.visible')
                .get('.shop-menu > .nav > :nth-child(5) > a').click()
                .get('b').should('be.visible')
        })
    })

})