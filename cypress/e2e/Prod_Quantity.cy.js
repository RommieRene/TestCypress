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
        it('Add Cart 4 times and Verify Product Quantity in Cart', () => {
            cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
                .get('.product-information').should('exist')
            cy.get('#quantity').clear().type('4')
            cy.get(':nth-child(5) > .btn').click()
            cy.get('.modal-footer > .btn').click()
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('#product-1').should('exist')



        })
    })
})
