import Functions from "../POM/functions";
import verifications from "../POM/verifications";
import Categories from "../POM/Categories";

const category = new Categories();
const verify = new verifications();
const basePage = new Functions();

describe('View Category Products', () => {
    it('Category Product', () => {
        basePage.visitToHomePage();
        verify.LeftSideCategoryVerification();
        category.womenCategory();
        category.dressSubCategory();
        verify.dressCategoryvisibility();
        category.manCategory();
        category.TshirtsSubCategory();
        verify.TshirtCategoryVisibility();
    })
})