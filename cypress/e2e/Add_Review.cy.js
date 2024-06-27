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
        it('Verify user is navigated to ALL PRODUCTS page successfully', () => {
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
            cy.get('.features_items').should('be.visible')
            cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
            cy.get('.active > a').should('be.visible')
            cy.get('#name').type('Pablo')
            cy.get('#email').type('testforpablo@gmail.com')
            cy.get('#review').type('typeing description')
            cy.get('#button-review').click()
            cy.get('.alert-success > span').should('be.visible')

        })
    })
})