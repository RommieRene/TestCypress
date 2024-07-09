import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Subscription from "../POM/Subscription";

const sub = new Subscription();
const basePage = new Functions();
const verify = new Verifications();

describe('Scroll Up without Arrow button and Scroll Down functionality', () => {
    it('Scroll Up ', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        cy.scrollTo('bottom');
        sub.SubscriptionTextVisibility();
        cy.scrollTo('top');
        verify.caruselInnerVisibility();

    })
})