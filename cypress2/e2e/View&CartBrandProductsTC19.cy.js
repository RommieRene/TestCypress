import Product from "../POM/Product";
import functions from "../POM/functions";
import verifications from "../POM/verifications";

const verify = new verifications();
const products = new Product();
const basePage = new functions();

describe('View & Cart Brand Products', () => {
    it('Cart and Brand', () => {
        basePage.visitToHomePage();
        products.clickOnProductButton();
        verify.brandsVisisbility();
        products.clickSubBrandPolo();
        verify.brandPoloVisibility();
        products.clickSubBrandMadam();
        verify.brandMadamVisibility();
    })
})