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
        it('Place Order - Login before checkout', () => {
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
            cy.get('[data-qa="login-email"]').type('testforpablo@gmail.com')
            cy.get('[data-qa="login-password"]').type('testing123')
            cy.get('[data-qa="login-button"]').click()
            cy.get(':nth-child(10) > a').should('be.visible')
            cy.get(':nth-child(9) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#cart_items > :nth-child(1)').should('be.visible')
            cy.get('.col-sm-6 > .btn').click()
            cy.get('#address_delivery').should('be.visible')
            cy.get('#address_invoice').should('be.visible')
            cy.get('.form-control').type('description')
            cy.get(':nth-child(7) > .btn').click()
            cy.get('[data-qa="name-on-card"]').type('Pablo Escobar')
            cy.get('[data-qa="card-number"]').type('2424242424242424')
            cy.get('[data-qa="cvc"]').type('152')
            cy.get('[data-qa="expiry-month"]').type('26/05')
            cy.get('[data-qa="expiry-year"]').type('2029')
            cy.get('[data-qa="pay-button"]').click()
            cy.get('.col-sm-9 > p').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()
            cy.get('.shop-menu > .nav > :nth-child(5)').click()
            cy.get('.col-sm-9 > :nth-child(2)').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()



        })
    })
})