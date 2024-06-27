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
        it('Add Product to Cart And verify everything works well', () => {
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
                .get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo').first().trigger('mouseover')
                .get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
                .get('.modal-footer > .btn').click()
                .get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo').first().trigger('mouseover')
                .get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
                .get('.modal-footer > .btn').click()
                .get('.shop-menu > .nav > :nth-child(3)').click()
                .get('#product-1').should('exist')
                .get('#product-2').should('exist')


        })



    })
})