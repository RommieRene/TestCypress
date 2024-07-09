import Functions from "../POM/functions";
import Verifications from "../POM/verifications"
import SignUpLoginPage from "../POM/SignUpLoginPage";
import Product from "../POM/Product";
import CartPage from "../POM/CartPage";

const cart = new CartPage();
const products = new Product();
const signup = new SignUpLoginPage();
const basePage = new Functions();
const verify = new Verifications();

describe('Download Invoice after purchase order', () => {
    it('Download Invoice', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        products.clickAddToCartButton();
        products.clickContinueShoppingButton();
        cart.clickCartButton();
        verify.cartPageVisibility();
        cart.clickOnProceedToCheckOut();
        cart.clickRegisterLoginButton();
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
        cart.clickCartButton();
        cart.clickOnProceedToCheckOut();
        verify.addressVerification();
        verify.ProductDetailsVisibility();
        cart.enterCommentInDescriptionSection();
        cart.clickPlaceOrderButton();
        cart.fillCardInformation();
        cart.successfulpayment();
        cart.clickDownloadInvoice();
        cart.clickContinueButton();
        signup.clickDeleteAccount();
        verify.accountIsDeletedVerification();
        signup.clickContinue();
    })
})