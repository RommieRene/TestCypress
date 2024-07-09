import functions from "../POM/functions";
import verifications from "../POM/verifications"
import Product from "../POM/Product";
import CartPage from "../POM/CartPage";
import SignUpLoginPage from "../POM/SignUpLoginPage";
import CorrectLogin from "../POM/CorrectLogin";

const login = new CorrectLogin();
const signup = new SignUpLoginPage();
const cart = new CartPage();
const products = new Product();
const verify = new verifications();
const basePage = new functions();

describe('Search Products and Verify Cart After Login', () => {
    it('Search Product', () => {
        basePage.visitToHomePage();
        products.clickOnProductButton();
        verify.productPageVisibility();
        products.searchProductName();
        verify.searchedProductVisibility();
        products.clickAddToCartButton();
        products.clickContinueShoppingButton();
        cart.clickCartButton();
        verify.cartPageVisibility();
        verify.productInCartVisibility();
        products.clickSignUpButton();
        login.correctLogin();
        cart.clickCartButton();
        verify.productInCartVisibility();
    })
})