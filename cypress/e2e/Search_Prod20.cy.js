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
        it('Search Product and Verify Cart After Login', () => {
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
            cy.get('.features_items').should('be.visible')
            cy.get('#search_product').type('JEANS')
            cy.get('#submit_search').click()
            cy.get('.title').should('be.visible')
            cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo').should('be.visible')
            cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo').should('be.visible')
            cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo').should('be.visible')
            cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#product-33').should('be.visible')
            cy.get('#product-35').should('be.visible')
            cy.get(':nth-child(4) > a').click()
            cy.get('[data-qa="login-email"]').type('testforpablo@gmail.com')
            cy.get('[data-qa="login-password"]').type('testing123')
            cy.get('[data-qa="login-button"]').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#product-33').should('be.visible')
            cy.get('#product-35').should('be.visible')


        })
    })

})