import IncorrectLogin from "../POM/IncorrectLogin";
import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import SignUpLoginPage from "../POM/SignUpLoginPage";
import CorrectLogin from "../POM/CorrectLogin";

const login = new CorrectLogin();
const basePage = new Functions();
const Incorrect = new IncorrectLogin();
const verify = new Verifications();
const signup = new SignUpLoginPage();

describe('Login with incorrect email and password', () => {
    it('Incorrect Login ', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        signup.clickOnSignupButton();
        verify.loginYourAccountVerification();
        Incorrect.enterInCorrectEmail();
        Incorrect.enterInCorrectPassword();
        login.clickLoginbutton();
        verify.IncorrectEmailOrPassword();


    })
})