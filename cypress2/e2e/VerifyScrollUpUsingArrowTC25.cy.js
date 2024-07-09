import Functions from "../POM/functions";
import Verifications from "../POM/verifications";
import Subscription from "../POM/Subscription";
import homePage from "../POM/homePage";

const home = new homePage();
const sub = new Subscription();
const basePage = new Functions();
const verify = new Verifications();

describe('Scroll Up using Arrow button and Scroll Down functionality', () => {
    it('Scroll Up', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        cy.scrollTo('bottom')
        sub.SubscriptionTextVisibility();
        home.ScrollUpArrowButton();
        verify.caruselInnerVisibility();
    })
})