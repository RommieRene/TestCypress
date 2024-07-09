import CartPage from "../POM/CartPage";
import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Product from "../POM/Product";
import CorrectLogin from "../POM/CorrectLogin";

const login = new CorrectLogin();
const products = new Product();
const cart = new CartPage();
const basePage = new Functions();
const verify = new Verifications();

describe('Add Products in Cart', () => {
    it('View Cart', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        login.correctLogin();
        products.clickOnProductButton();
        products.hoverOverFirstProduct();
        products.clickAddToCartFirstProduct();
        products.clickContinueShoppingButton();
        products.hoverOverSecondProduct();
        products.clickAddToCartSecondProduct();
        products.clickContinueShoppingButton();
        cart.clickCartButton();
        cart.clickOnProceedToCheckOut();
        cart.product1Visibility();
        cart.product2visibility();
        cart.totalPriceverification();

    })
})
















