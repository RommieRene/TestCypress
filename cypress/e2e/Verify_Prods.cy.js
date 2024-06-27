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
        it('Should Verify All Products and Product Detail Page', () => {
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
                .get('.title').should('be.visible')
                .get('.col-sm-9').should('be.visible')
                .get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
                .get('.col-sm-9').should('be.visible')
                .get('.product-information > h2').should('be.visible')
                .get('.product-information > :nth-child(3)').should('be.visible')
                .get(':nth-child(5) > span').should('be.visible')
                .get('.product-information > :nth-child(6)').should('be.visible')
                .get('.product-information > :nth-child(7)').should('be.visible')
                .get('.product-information > :nth-child(8)').should('be.visible')




        })
    })
})