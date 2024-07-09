import Functions from "../POM/functions";
import Verifications from "../POM/verifications"
import homePage from "../POM/homePage";

const home = new homePage();
const basePage = new Functions();
const verify = new Verifications();


describe('TestCasePage', () => {

    it('Verify Visibility ', () => {
        basePage.visitToHomePage();
        verify.WebpageVisability();
        home.clickOnTestCasesButton();
        verify.testCasePageVisibility();
    })
})