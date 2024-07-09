import SignUpLoginPage from "./SignUpLoginPage";
const correct = new SignUpLoginPage();
export default class CorrectLogin {




    correctEmail = '[data-qa="login-email"]'
    correctPassword = '[data-qa="login-password"]'
    loginButton = '[data-qa="login-button"]'
    logOutButton = '[href="/logout"]'
    signInEmail = '[data-qa="signup-email"]'
    enterCorrectEmail(){
        cy.get(this.correctEmail).type('testforpablo@gmail.com')
    }
    enterCorrectPassword(){
        cy.get(this.correctPassword).type('testing123')
    }
    clickLoginbutton(){
        cy.get(this.loginButton).click()
    }
    clickLogOut() {
        cy.get(this.logOutButton).click()
    }
    orrectEmail(){
        cy.get(this.signInEmail).type('testforpablo@gmail.com')
    }
    correctLogin(){
        cy.get('a[href="/login"]').click();
        cy.get(this.correctEmail).type('testforpablo@gmail.com')
        cy.get(this.correctPassword).type('testing123')
        cy.get(this.loginButton).click()

    }
}