import Functions from "../POM/functions";
import Verifications from "../POM/verifications"
import SignUpLoginPage from "../POM/SignUpLoginPage";

const signup = new SignUpLoginPage();
const basePage = new Functions();
const verify = new Verifications();
describe('Register User', () => {

    it('New user Signup', () => {

        basePage.visitToHomePage();
        verify.WebpageVisability();
        signup.clickOnSignupButton();
        verify.NewUserSignUpVisability();
        signup.enterUsername();
        signup.enterEmail();
        signup.clickSignUpButton();
        verify.EnterAccountInformationVerification();
        signup.ChooseGenderMale();
        signup.enterPassword();
        signup.pickDay();
        signup.pickMonth()
        signup.pickYear();
        signup.clickNewsLetter();
        signup.clickSpecialOffer();
        signup.enterFirstName();
        signup.enterLastNamecy();
        signup.enterCompanyName();
        signup.enterAddress1();
        signup.enterAddress2();
        signup.enterCountryName();
        signup.enterStateName();
        signup.enterCityName();
        signup.enterZipCode();
        signup.enterPhoneNumber();
        signup.clickCreateAccButton();
        verify.AccountCreatedVerification();
        signup.clickContinueButton();
        verify.UserLoggedInVisability();
        signup.clickDeleteAccount();
        verify.accountIsDeletedVerification();
        signup.clickContinue();

    })
})