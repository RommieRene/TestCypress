import CartPage from "../POM/CartPage";
import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Subscription from "../POM/Subscription";

const cart = new CartPage();
const sub = new Subscription();
const basePage = new Functions();
const verify = new Verifications();

describe('Subscription in Cart page', () => {
    it('text SUBSCRIPTION', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        cart.clickCartButton();
        sub.SubscriptionTextVisibility();
        sub.SubscriptionFieldEnterEmail();
        verify.SuccessfulMessegeIsVisible();
    })
})