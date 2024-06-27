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
        it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
            cy.scrollTo('bottom')
            cy.get('.single-widget > h2').should('be.visible')
            cy.scrollTo('top')
            cy.get(':nth-child(4) > a').should('be.visible')


        })


    })
})