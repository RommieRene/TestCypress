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
        it('Verify Subcsribtion in home page', () => {
            cy.get('.shop-menu > .nav > :nth-child(3)').click
                .get('.footer-widget > .container').should('be.visible')
                .get('#susbscribe_email').type('email@gmail.com')
                .get('#subscribe').click()

        })
    })







})
