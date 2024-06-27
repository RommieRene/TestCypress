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

        it('Place Order, Register While Checkout', () => {

            cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#cart_items > :nth-child(1)').should('exist')
            cy.get('.col-sm-6 > .btn').click()
            cy.get('.modal-body > :nth-child(2) > a > u').click()
            cy.get('[data-qa="signup-name"]').type('bembi')
            cy.get('[data-qa="signup-email"]').type('bembi@boomba.com')
            cy.get('[data-qa="signup-button"]').click()
            cy.get('#id_gender1').click()
            cy.get('[data-qa="password"]').type('bambispass')
            cy.get('[data-qa="days"]').select('15')
            cy.get('[data-qa="months"]').select('6')
            cy.get('[data-qa="years"]').select('1992')
            cy.get('#newsletter').click()
            cy.get('#optin').click()
            cy.get('[data-qa="first_name"]').type('bembi')
            cy.get('[data-qa="last_name"]').type('peter')
            cy.get('[data-qa="company"]').type('somethins')
            cy.get('[data-qa="address"]').type('herewego')
            cy.get('[data-qa="address2"]').type('therewego')
            cy.get('[data-qa="country"]').select('Canada')
            cy.get('[data-qa="state"]').type('Manitoba')
            cy.get('[data-qa="city"]').type('Selkirk')
            cy.get('[data-qa="zipcode"]').type('A1A')
            cy.get('[data-qa="mobile_number"]').type('+15487963587')
            cy.get('[data-qa="create-account"]').click()
            cy.get('[data-qa="continue-button"]').click()
            cy.get(':nth-child(10) > a').should('be.visible')
            cy.get(':nth-child(10) > a').should('exist')
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('.col-sm-6 > .btn').click()
            cy.get('[data-qa="checkout-info"] > .row > :nth-child(1)').should('exist')
            cy.get('#address_invoice').should('exist')
            cy.get('#product-3').should('be.visible')
            cy.get('.form-control').type('verifying my order')
            cy.get(':nth-child(7) > .btn').click()
            cy.get('[data-qa="name-on-card"]').type('bembi peter')
            cy.get('[data-qa="card-number"]').type('2424242424242424')
            cy.get('[data-qa="cvc"]').type('242')
            cy.get('[data-qa="expiry-month"]').type('15/58')
            cy.get('[data-qa="expiry-year"]').type('2029')
            cy.get('[data-qa="pay-button"]').click()
            cy.get(':nth-child(5) > a').click()
            cy.get('b').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()



        })
    })
})