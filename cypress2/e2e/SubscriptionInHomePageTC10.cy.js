import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Subscription from "../POM/Subscription";

const sub = new Subscription();
const basePage = new Functions();
const verify = new Verifications();

describe('Subscription in home page', () => {
    it('text SUBSCRIPTION', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        cy.scrollTo("bottom");
        sub.SubscriptionTextVisibility();
        sub.SubscriptionFieldEnterEmail();
        verify.SuccessfulMessegeIsVisible();
    })
})