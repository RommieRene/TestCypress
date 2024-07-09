import {faker} from "@faker-js/faker";

let username = faker.internet.userName();
let Password = faker.internet.password();
let email = faker.internet.email();
let lastname = faker.internet.userName()

export default class ContactUs {

    contactUsButton = '[href="/contact_us"]'
    nameField = '[data-qa="name"]'
    emailField = '[data-qa="email"]'
    subjectField = '[data-qa="subject"]'
    messegeField = '[data-qa="message"]'




    clickContactUsButton(){
        cy.get(this.contactUsButton).click()
    }
    enterName() {
        cy.get(this.nameField).type(username)
    }
    enterEmail() {
        cy.get(this.emailField).type(email)
    }
    enterSubject () {
        cy.get(this.subjectField).type('subject')
    }
    enterMessege () {
        cy.get(this.messegeField).type('messege')
    }
    




}