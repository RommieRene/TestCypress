import Functions from "../POM/functions";
import Verifications from "../POM/verifications"
import SignUpLoginPage from "../POM/SignUpLoginPage";
import CorrectLogin from "../POM/CorrectLogin";

const signup = new SignUpLoginPage();
const basePage = new Functions();
const verify = new Verifications();
const login = new CorrectLogin();


describe('Register User with existing email', () => {
    it('Register', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        signup.clickOnSignupButton();
        verify.NewUserSignUpVisability();
        signup.enterUsername();
        login.orrectEmail();
        signup.clickSignUpButton();
        verify.ErrorEmailAddressAlreadyExist





    })
})