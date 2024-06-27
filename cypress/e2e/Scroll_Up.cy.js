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

        it('Download Invoice after purchase order', () => {
            cy.get('.single-widget > h2').scrollIntoView()
            cy.get('.single-widget > h2').should('be.visible')
            cy.get('#scrollUp > .fa').click()
            cy.get('.col-sm-8').should('be.visible')

        })
    })
})