import {faker} from "@faker-js/faker";

let email = faker.internet.email();
let username = faker.internet.userName();
let lastname = faker.internet.userName();

let totalPrice = 0;
const productSelectors = [
    '#product-1 > td.cart_total > p',
    '#product-2 > td.cart_total > p'
];

export default class CartPage {

    product1 = '[id="product-1"]'
    product2 = '[id="product-2"]'
    productTabel = '[id="cart_info"]'
    ProceedToCheckOut = '[class="btn btn-default check_out"]'
    registerLoginButton = 'p.text-center > a[href="/login"]'
    descriptionField = '[class="form-control"]'
    placeOrderButton = '[href="/payment"]'
    cardName = '[name="name_on_card"]'
    cardNumber = '[name="card_number"]'
    cardCVC = '[name="cvc"]'
    cardMM = '[name="expiry_month"]'
    cardYear = '[name="expiry_year"]'
    PayAndConfirmOrderButton = '[class="col-md-12 form-group"]'
    deleteProduct = '[class="cart_quantity_delete"]'
    nameField = '[id="name"]'
    emailField = '[id="email"]'
    addReviewField = '[id="review"]'
    submitButton = '[id="button-review"]'
    successMessage = '[style="font-size: 20px;"]'
    downloadInvoice = '[href="/download_invoice/500"]'
    continueButton ='[class="pull-right"]'

    clickCartButton() {
        cy.get('li > a[href="/view_cart"]').click();
    }
    product1Visibility(){
        cy.get(this.product1).should('be.visible')
    }
    product2visibility(){
        cy.get(this.product2).should('be.visible')
    }
    clickOnProceedToCheckOut(){
        cy.get(this.ProceedToCheckOut).click()
    }
    totalPriceverification(){
        cy.wrap(productSelectors).each((selector) => {
            cy.get(selector).invoke('text').then((priceText) => {
                const price = parseFloat(priceText.replace('Rs.',"", ''));
                totalPrice += price;
            });
        }).then(() => {
            cy.get('#cart_info > table > tbody > tr:nth-child(3) > td:nth-child(4) > p')
                .invoke('text').then((displayedTotalText) => {
                const displayedTotal = parseFloat(displayedTotalText.replace('Rs.', ''));
                expect(displayedTotal).to.eq(totalPrice);
            })
        })
    }
    clickRegisterLoginButton(){
        cy.get(this.registerLoginButton).click();
    }
    enterCommentInDescriptionSection(){
        cy.get(this.descriptionField).type('some comment')
    }
    clickPlaceOrderButton(){
        cy.get(this.placeOrderButton).click()
    }
    fillCardInformation(){
        cy.get(this.cardName).type(username).type(' ').type(lastname)
        cy.get(this.cardNumber).type('2424242424242424')
        cy.get(this.cardCVC).type('456')
        cy.get(this.cardMM).type('2465')
        cy.get(this.cardYear).type('1994')
        cy.get(this.PayAndConfirmOrderButton).click()
    }
    clickDeleteProduct(){
        cy.get(this.deleteProduct).click()
    }
    EnterNameEmailReview(){
        cy.get(this.nameField).type(username)
        cy.get(this.emailField).type(email)
        cy.get(this.addReviewField).type('some review')
    }
    clickSubmitButton(){
        cy.get(this.submitButton).click()
    }
    successMessageVisibility(){
        cy.get(this.successMessage).should('be.visible')
    }
    productVisibilityIncart(){
        cy.get(this.productTabel).should('be.visible')
    }
    successfulpayment(){
        cy.get('p[style="font-size: 20px; font-family: garamond;"]')
            .should('be.visible')
            .and('contain', 'Congratulations! Your order has been confirmed!');
    }
    clickDownloadInvoice(){
        cy.get(this.downloadInvoice).click()
    }
    clickContinueButton(){
        cy.get(this.continueButton).click()
    }













}