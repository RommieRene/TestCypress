import Functions from "../POM/functions";
import Verifications from "../POM/verifications"
import Product from "../POM/Product";

const products = new Product();
const basePage = new Functions();
const verify = new Verifications();

describe('All Products and product detail page', () => {
    it('Verify that detail detail is visible ', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        products.clickOnProductButton();
        verify.productPageVisibility();
        products.productListVisibility();
        products.clickOnViewProductButton();
        products.productDetailVisibility();
        products.productName();
        products.productCategory();
        products.productPrice();
        products.productAvailability();
        products.productCondition();
        products.productBrand();
    })
})