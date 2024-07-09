import functions from "../POM/functions";
import Product from "../POM/Product";
import verifications from "../POM/verifications";
import CartPage from "../POM/CartPage";

const cart = new CartPage();
const verify = new verifications();
const products = new Product();
const basePage= new functions();

describe('Add review on product', () => {
    it('Add review on product', () => {
        basePage.visitToHomePage();
        products.clickOnProductButton();
        verify.productPageVisibility();
        products.clickOnViewProductButton();
        verify.WriteReviewVisibility();
        cart.EnterNameEmailReview();
        cart.clickSubmitButton();
        cart.successMessageVisibility();
    })
})