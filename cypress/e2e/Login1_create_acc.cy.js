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
        it("in sign-up page verify 'New User-Signup' is visible", () => {
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
                .get('.signup-form > h2').should('be.visible')
                .get('[data-qa="signup-name"]').type('Pablo')
                .get('[data-qa="signup-email"]').type('testforpablo@gmail.com')
                .get('[data-qa="signup-button"]').click()
                .get(':nth-child(1) > b').should('be.visible')
                .get('#id_gender1').click()
                .get('[data-qa="password"]').type('testing123')
                .get('[data-qa="days"]').select('9')
                .get('[data-qa="months"]').select('2')
                .get('[data-qa="years"]').select('1994')
                .get('form > :nth-child(7)').should('be.visible')
                .get('form > :nth-child(7)').click()
                .get('form > :nth-child(8)').should('be.visible')
                .get('form > :nth-child(8)').click()
                .get('[data-qa="first_name"]').type('Pablo')
                .get('[data-qa="last_name"]').type('Escobar')
                .get('[data-qa="company"]').type('Bli bel')
                .get('[data-qa="address"]').type('Dgine Dgin street 12 ')
                .get('[data-qa="address2"]').type('Dgine Dgen street 12')
                .get('[data-qa="country"]').select('Singapore')
                .get('[data-qa="state"]').type('Jungle')
                .get('[data-qa="city"]').type('Honey')
                .get('[data-qa="zipcode"]').type('52623')
                .get('[data-qa="mobile_number"]').type('+5482353225')
                .get('[data-qa="create-account"]').click()
                .get('b').should('be.visible')
                .get('[data-qa="continue-button"]').click()
                .get(':nth-child(10) > a').should('be.visible')


        })

    })
})







