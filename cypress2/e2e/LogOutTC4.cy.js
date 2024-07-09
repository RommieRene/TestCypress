import Functions from "../POM/functions";
import Verifications from "../POM/verifications"
import SignUpLoginPage from "../POM/SignUpLoginPage";
import CorrectLogin from "../POM/CorrectLogin";

const signup = new SignUpLoginPage();
const basePage = new Functions();
const verify = new Verifications();
const login = new CorrectLogin();


describe('Login Out User', () => {
    it('Log out ', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        signup.clickOnSignupButton();
        verify.loginYourAccountVerification();
        login.enterCorrectEmail();
        login.enterCorrectPassword();
        login.clickLoginbutton();
        verify.UserLoggedInVisability();

    })
})