import CartPage from "../POM/CartPage";
import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Product from "../POM/Product";
import homePage from "../POM/homePage";
import SignUpLoginPage from "../POM/SignUpLoginPage";
import CorrectLogin from "../POM/CorrectLogin";

const login = new CorrectLogin();
const signup = new SignUpLoginPage();
const home = new homePage();
const products = new Product();
const cart = new CartPage();
const basePage = new Functions();
const verify = new Verifications();

describe('Place Order Login before Checkout', () => {
    it('Place Order', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        signup.clickOnSignupButton();
        login.enterCorrectEmail();
        login.enterCorrectPassword();
        login.clickLoginbutton();
        verify.UserLoggedInVisability();
        products.clickAddToCartSecondProduct();
        cart.clickCartButton();
        verify.cartPageVisibility();
        cart.clickOnProceedToCheckOut();
        verify.searchProductVisibility();
        cart.enterCommentInDescriptionSection();
        cart.clickPlaceOrderButton();
        cart.fillCardInformation();
        verify.successMessageVisibility();
        home.clickDeleteAcoountButton();
        verify.accountIsDeletedVerification();
        signup.clickContinue();
    })
})