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
        it('Verify that Brands are visible on left side bar', () => {
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
            cy.get('.brands_products').should('be.visible')
            cy.get('.brands-name > .nav > :nth-child(1) > a').click()
            cy.get('.title').should('exist')
            cy.get('.features_items').should('be.visible')
            cy.get('.brands-name > .nav > :nth-child(3) > a').click()
            cy.get('.title').should('be.visible')
            cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo').should('exist')
            cy.get(':nth-child(4) > .product-image-wrapper').should('exist')
            cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo').should('exist')



        })

    })
})