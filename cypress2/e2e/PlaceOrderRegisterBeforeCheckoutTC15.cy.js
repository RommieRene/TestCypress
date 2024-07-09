import CartPage from "../POM/CartPage";
import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Product from "../POM/Product";
import homePage from "../POM/homePage";
import SignUpLoginPage from "../POM/SignUpLoginPage";

const signup = new SignUpLoginPage();
const home = new homePage();
const products = new Product();
const cart = new CartPage();
const basePage = new Functions();
const verify = new Verifications();

describe('Place Order Register before Checkout', () => {
    it('Place Order', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        signup.clickOnSignupButton();
        signup.enterUsername();
        signup.enterEmail();
        signup.clickSignUpButton();
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
        products.clickAddToCartSecondProduct();
        cart.clickCartButton();
        cart.clickCartButton();
        verify.cartPageVisibility();
        cart.clickOnProceedToCheckOut();
        verify.ProductDetailsVisibility();
        cart.enterCommentInDescriptionSection();
        cart.clickPlaceOrderButton();
        cart.fillCardInformation();
        verify.successMessageVisibility();
        home.clickDeleteAcoountButton();
        verify.accountIsDeletedVerification();
        signup.clickContinue();
    })
})