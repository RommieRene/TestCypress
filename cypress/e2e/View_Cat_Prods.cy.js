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
        it('Verify That categories are visible on left side bar', () => {
            cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
            cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
            cy.get('.features_items').should('be.visible')
            cy.get('.title').should('exist')
            cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
            cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
            cy.get('.features_items').should('be.visible')

        })

    })
})