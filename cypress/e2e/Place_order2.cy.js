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
        it('Place Order: Register before checkout', () => {
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
            cy.get('[data-qa="signup-name"]').type('kim')
            cy.get('[data-qa="signup-email"]').type('kim@boomba.com')
            cy.get('[data-qa="signup-button"]').click()
            cy.get('#id_gender1').click()
            cy.get('[data-qa="password"]').type('kimkard')
            cy.get('[data-qa="days"]').select('11')
            cy.get('[data-qa="months"]').select('7')
            cy.get('[data-qa="years"]').select('1972')
            cy.get('#newsletter').click()
            cy.get('#optin').click()
            cy.get('[data-qa="first_name"]').type('Kim')
            cy.get('[data-qa="last_name"]').type('Kardashian')
            cy.get('[data-qa="company"]').type('somethins')
            cy.get('[data-qa="address"]').type('herewego')
            cy.get('[data-qa="address2"]').type('therewego')
            cy.get('[data-qa="country"]').select('Canada')
            cy.get('[data-qa="state"]').type('Manitoba')
            cy.get('[data-qa="city"]').type('Selkirk')
            cy.get('[data-qa="zipcode"]').type('A1A')
            cy.get('[data-qa="mobile_number"]').type('+15482345587')
            cy.get('[data-qa="create-account"]').click()
            cy.get('[data-qa="continue-button"]').click()
            cy.get(':nth-child(10) > a').should('be.visible')
            cy.get(':nth-child(10) > a').should('exist')
            cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#product-1').should('be.visible')
            cy.get('.col-sm-6 > .btn').click()
            cy.get('#address_delivery').should('be.visible')
            cy.get('#address_invoice').should('be.visible')
            cy.get('.form-control').type('Typre description here')
            cy.get(':nth-child(7) > .btn').click()
            cy.get('[data-qa="name-on-card"]').type('Kim Kardashyan')
            cy.get('[data-qa="card-number"]').type('2424242424242424')
            cy.get('[data-qa="cvc"]').type('578')
            cy.get('[data-qa="expiry-month"]').type('12/12')
            cy.get('[data-qa="expiry-year"]').type('2029')
            cy.get('[data-qa="pay-button"]').click()
            cy.get('.col-sm-9 > p').should('be.visible')
            cy.get('.nav > :nth-child(5)').click()
            cy.get('b').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()

        })






    })
})