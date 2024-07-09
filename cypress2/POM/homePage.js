export default class homePage{
    viewProductButton = '[href="/product_details/1"]'
    deleteAccButton = '[href="/delete_account"]'
    ScrollUpArrow = '[class="fa fa-angle-up"]'




    clickOnTestCasesButton(){
        cy.contains('a', 'Test Cases').click();

    };

    clickViewProductButton() {
        cy.get(this.viewProductButton).click()
    }
    clickDeleteAcoountButton(){
        cy.get(this.deleteAccButton).click()
    }
    recomandedItemAddToCartButton(){
        cy.contains('a', 'Add to cart')
            .should('be.visible')
            .click();
    }
    ScrollUpArrowButton(){
        cy.get(this.ScrollUpArrow).click()
    }
}