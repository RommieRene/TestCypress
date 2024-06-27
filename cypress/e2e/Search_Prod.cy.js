/// <reference types="cypress" />
const productName = "Blue Top"
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
        it('Should Verify Search Prod Exist and is visible', () => {
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
                .get('.title').should('be.visible')
                .get('#search_product').type(productName)
                .get('#submit_search').click()
                .get('.title').should('be.visible')
                .get('.features_items').should('be.visible')
            cy.get(`[class="productinfo text-center"] p`).contains(productName)

        })
    })
})