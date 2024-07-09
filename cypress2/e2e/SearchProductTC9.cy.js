import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Product from "../POM/Product";

const products = new Product();
const basePage = new Functions();
const verify = new Verifications();


describe('Search Product', () => {
    it('Search Product', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        products.clickOnProductButton();
        verify.productPageVisibility();
        products.searchProductName();
        verify.searchProductVisibility();
        verify.productNameIsVisible();

    })
})