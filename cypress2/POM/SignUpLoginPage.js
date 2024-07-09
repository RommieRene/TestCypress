import {faker} from "@faker-js/faker";

let username = faker.internet.userName();
let Password = faker.internet.password();
let email = faker.internet.email();
let lastname = faker.internet.userName();



export default class SignUpLoginPage {


    onTopSignUpButton = '[href="/login"]';
    SignupUsername = '[data-qa="signup-name"]'
    SignupEmail = '[data-qa="signup-email"]'
    SingupButton = '[data-qa="signup-button"]'
    EnterAccInfo = '[class="login-form"]'
    genderMale = '[id="id_gender1"]'
    randomPassword = '[id="password"]'
    day = '[id="days"]'
    month = '[id="months"]'
    year = '[id="years"]'
    newsLetterbutton = '[id="newsletter"]'
    ReceiveSpecialOffers = '[id="optin"]'
    firstName = '[data-qa="first_name"]'
    lastName = '[data-qa="last_name"]'
    companyName = '[data-qa="company"]'
    address1 = '[data-qa="address"]'
    address2 = '[data-qa="address2"]'
    country = '[id="country"]'
    state = '[data-qa="state"]'
    city = '[data-qa="city"]'
    zipcode = '[data-qa="zipcode"]'
    phoneNumber = '[data-qa="mobile_number"]'
    createAccountButton = '[data-qa="create-account"]'
    continueButton = '[data-qa="continue-button"]'
    deleteAccount = '[href="/delete_account"]'
    clickOnContinue = '[data-qa="continue-button"]'

    clickOnSignupButton(){
        cy.get(this.onTopSignUpButton).click();
    }
    enterUsername() {
        cy.get(this.SignupUsername).type(username)
    }

    enterEmail() {
        cy.get(this.SignupEmail).type(email)
    }

    clickSignUpButton() {
        cy.get(this.SingupButton).click()
    }

    ChooseGenderMale() {
        cy.get(this.genderMale).click()
    }

    enterPassword() {
        cy.get(this.randomPassword).type(Password)
    }

    pickDay() {
        cy.get(this.day).select('9')
    }

    pickMonth() {
        cy.get(this.month).select('2')
    }

    pickYear() {
        cy.get(this.year).select('1994')
    }

    clickNewsLetter() {
        cy.get(this.newsLetterbutton).click()
    }

    clickSpecialOffer() {
        cy.get(this.ReceiveSpecialOffers).click()
    }

    enterFirstName() {
        cy.get(this.firstName).type(username)
    }

    enterLastNamecy() {
        cy.get(this.lastName).type(lastname)
    }

    enterCompanyName() {
        cy.get(this.companyName).type(username)
    }

    enterAddress1() {
        cy.get(this.address1).type(username)
    }

    enterAddress2() {
        cy.get(this.address2).type(lastname)
    }

    enterCountryName() {
        cy.get(this.country).select('United States')
    }

    enterStateName() {
        cy.get(this.state).type(username)
    }

    enterCityName() {
        cy.get(this.city).type(lastname)
    }

    enterZipCode() {
        cy.get(this.zipcode).type('5456')
    }

    enterPhoneNumber() {
        cy.get(this.phoneNumber).type('597845647')
    }

    clickCreateAccButton() {
        cy.get(this.createAccountButton).click()
    }

    clickContinueButton() {
        cy.get(this.continueButton).click()
    }
    clickDeleteAccount(){
        cy.get(this.deleteAccount).click()
    }
    clickContinue(){
        cy.get(this.clickOnContinue).click()
    }
}