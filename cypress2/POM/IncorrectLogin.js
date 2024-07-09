export default class IncorrectLogin {

    IncorrectEmail = '[data-qa="login-email"]'
    IncorrectPassword = '[data-qa="login-password"]'


    enterInCorrectEmail(){
        cy.get(this.IncorrectEmail).type('sdfsdforpablo@gmail.com')
    }
    enterInCorrectPassword(){
        cy.get(this.IncorrectPassword).type('testdsfing123')
    }



}