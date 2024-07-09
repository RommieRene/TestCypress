import CartPage from "../POM/CartPage";
import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Product from "../POM/Product";
import homePage from "../POM/homePage";

const home = new homePage();
const products = new Product();
const cart = new CartPage();
const basePage = new Functions();
const verify = new Verifications();

describe('Product quantity in Cart', () => {
    it('Product quantity in Cart', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        home.clickViewProductButton();
        products.productDetailVisibility();
        products.increaseProductQuantity();
        products.addToCart();
        products.clickContinueShoppingButton();
        cart.clickCartButton();
        verify.ProductQuantityVerification();

    })
})