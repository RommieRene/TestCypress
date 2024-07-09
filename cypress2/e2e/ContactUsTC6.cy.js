import Functions from "../POM/functions";
import Verifications from "../POM/verifications"
import ContactUs from "../POM/ContactUs";

const contactUs = new ContactUs();
const basePage = new Functions();
const verify = new Verifications();


describe('Contact Us Form', () => {
    it('Success message ', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        contactUs.clickContactUsButton();
        contactUs.enterName();
        verify.getInTouchVisability();
        contactUs.enterEmail();
        contactUs.enterSubject();
        contactUs.enterMessege();

    });


})

