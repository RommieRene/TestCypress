import {faker} from "@faker-js/faker";

let email = faker.internet.email();
export default class Subscription {


    subscriptionText = '[class="single-widget"]'
    enterEmail = '[id="susbscribe_email"]'
    enterEmailButton = '[class="fa fa-arrow-circle-o-right"]'


    SubscriptionTextVisibility(){
    cy.get(this.subscriptionText).should('be.visible')
    }
    SubscriptionFieldEnterEmail(){
        cy.get(this.enterEmail).type(email)
        cy.get(this.enterEmailButton).click()
    }
}