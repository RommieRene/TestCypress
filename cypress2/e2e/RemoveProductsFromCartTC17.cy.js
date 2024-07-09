import CartPage from "../POM/CartPage";
import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Product from "../POM/Product";

const products = new Product();
const cart = new CartPage();
const basePage = new Functions();
const verify = new Verifications();

describe('Remove Products From Cart', () => {
    it('Add products to cart', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        products.clickAddToCartSecondProduct();
        products.clickContinueShoppingButton();
        cart.clickCartButton();
        verify.cartPageVisibility();
        cart.clickDeleteProduct();
        verify.emptyCartVerification();
    })
})
