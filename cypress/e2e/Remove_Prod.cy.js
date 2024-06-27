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
        it('Remove Profuct from Cart', () => {
            cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#cart_items > :nth-child(1)').should('be.visible')
            cy.get('.cart_quantity_delete').click()
            cy.get('#empty_cart').should('exist')



        })
    })
})