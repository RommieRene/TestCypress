import functions from "../POM/functions";
import verifications from "../POM/verifications";
import SignUpLoginPage from "../POM/SignUpLoginPage";
import Product from "../POM/Product";
import CartPage from "../POM/CartPage";


const cart = new CartPage();
const products = new Product();
const signup = new SignUpLoginPage();
const verify = new verifications();
const basePage = new functions();

describe('address details in checkout page', () => {
    it('Click Signup / Login button', () => {
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
        products.clickAddToCartButton();
        cart.clickCartButton();
        verify.cartPageVisibility();
        cart.clickOnProceedToCheckOut();
        verify.addressVerification();
        signup.clickDeleteAccount();
        verify.accountIsDeletedVerification();
        signup.clickContinue();
    })
})
