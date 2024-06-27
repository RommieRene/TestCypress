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
        it('Click Download Invoice button and verify invoice is downloaded successfully.', () => {
            cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3)').click()
            cy.get('#cart_items > :nth-child(1)').should('be.visible')
            cy.get('.col-sm-6 > .btn').click()
            cy.get('.modal-body > :nth-child(2) > a > u').click()
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
            cy.get('.col-sm-9').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()
            cy.get(':nth-child(10) > a').should('be.visible')
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('.col-sm-6 > .btn').click()
            cy.get('#address_delivery').should('exist')
            cy.get('#product-1').should('exist')
            cy.get('.form-control').type('leave a comment')
            cy.get(':nth-child(7) > .btn').click()
            cy.get('[data-qa="name-on-card"]').type('Harry Potter')
            cy.get('[data-qa="card-number"]').type('2424242424242424')
            cy.get('[data-qa="cvc"]').type('245')
            cy.get('[data-qa="expiry-month"]').type('12/04')
            cy.get('[data-qa="expiry-year"]').type('2029')
            cy.get('[data-qa="pay-button"]').click()
            cy.get('.col-sm-9').should('be.visible')
            cy.get('.col-sm-9 > .btn-default').click()
            cy.get('[data-qa="continue-button"]').click()
            cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
            cy.get('.col-sm-9').should('be.visible')





        })


    })
})