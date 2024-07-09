import functions from "../POM/functions";
import verifications from "../POM/verifications";
import homePage from "../POM/homePage";
import Product from "../POM/Product";
import CartPage from "../POM/CartPage";

const cart = new CartPage();
const products = new Product();
const home = new homePage();
const verify = new verifications();
const basePage = new functions();

describe('Add to cart from Recommended items', () => {
    it('Add To Cart', () => {
        basePage.visitToHomePage();
        cy.scrollTo('bottomLeft');
        verify.recomandedItemsVisibility();
        home.recomandedItemAddToCartButton();
        products.clickContinueShoppingButton();
        cart.clickCartButton();
        cart.productVisibilityIncart();
    })
})
