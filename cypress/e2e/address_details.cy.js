/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('http://automationexercise.com')
    })


    describe('.should() - Verify that home page is visible successfully', () => {
        it('.should() - Verify page opens', () => {
            //https://automationexercise.com/
            cy.title().should('include', 'Automation Exercise')
            cy.get('header .logo').should('be.visible')
            cy.get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible')
            cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible')
            cy.get(':nth-child(4) > a').should('be.visible')
        })
        it('Verify address details in checkout page', () => {
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
            cy.get('.signup-form > h2').should('be.visible')
            cy.get('[data-qa="signup-name"]').type('Harry')
            cy.get('[data-qa="signup-email"]').type('harrypottertest@gmail.com')
            cy.get('[data-qa="signup-button"]').click()
            cy.get(':nth-child(1) > b').should('be.visible')
            cy.get('#id_gender1').click()
            cy.get('[data-qa="password"]').type('protego')
            cy.get('[data-qa="days"]').select('9')
            cy.get('[data-qa="months"]').select('2')
            cy.get('[data-qa="years"]').select('1994')
            cy.get('form > :nth-child(7)').should('be.visible')
            cy.get('form > :nth-child(7)').click()
            cy.get('form > :nth-child(8)').should('be.visible')
            cy.get('form > :nth-child(8)').click()
            cy.get('[data-qa="first_name"]').type('Harry')
            cy.get('[data-qa="last_name"]').type('Potter')
            cy.get('[data-qa="company"]').type('Bli bel')
            cy.get('[data-qa="address"]').type('4 Privet Drive, Little Whinging, Surrey')
            cy.get('[data-qa="address2"]').type('4 Privet Drive, Little Whinging, Surrey')
            cy.get('[data-qa="country"]').select('Singapore')
            cy.get('[data-qa="state"]').type('London')
            cy.get('[data-qa="city"]').type('London')
            cy.get('[data-qa="zipcode"]').type('52623')
            cy.get('[data-qa="mobile_number"]').type('+523482353225')
            cy.get('[data-qa="create-account"]').click()
            cy.get('b').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()
            cy.get(':nth-child(10) > a').should('be.visible')
            cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#cart_items > :nth-child(1)').should('be.visible')
            cy.get('.col-sm-6 > .btn').click()
            cy.get('#address_delivery').should('be.visible')
            cy.get('#address_invoice').should('be.visible')
            /*cy.get('#address_delivery').should('eq', '#address_invoice')*/
            cy.get(':nth-child(5) > a').click()
            cy.get('.col-sm-9 > :nth-child(2)').should('be.visible')

        })

    })
})


