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

describe('Place Oder Registration while Checkout', () => {
    it('Place order', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        products.clickAddToCartSecondProduct();
        cy.wait(2000)
        products.clickContinueShoppingButton();
        cart.clickCartButton();
        cart.clickOnProceedToCheckOut();
        cart.clickRegisterLoginButton();
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
        cart.clickCartButton();
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