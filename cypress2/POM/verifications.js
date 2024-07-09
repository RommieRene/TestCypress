import Product from "./Product";
const products = new Product();
export  default class verifications {
    check_webpage1 = '[class="header-middle"]'
    check_webpage2 = '[src="/static/images/home/logo.png"]'
    homepage = '[class="fa fa-home"]'
    homeLogo = '[class="logo pull-left"]'
    productButton = '[href="/products"]'
    loginSignupButton = '[href="/login"]'
    newUserSignUpblock = '[class="signup-form"]'
    enterAccountInformation = '[class="title text-center"]'
    UserIsLoggedInAs = '[class="fa fa-user"]'
    accountIsDeleted = '[data-qa="account-deleted"]'
    accountcreated = '[class="col-sm-9 col-sm-offset-1"]'
    loginPage = '[class="col-sm-4 col-sm-offset-1"]'
    getInTouch = '[class="col-sm-12"]'
    productPage = '[class="title text-center"]'
    testCasePage = '[class="title text-center"]'
    productName = '[class="productinfo text-center"]'
    addressAndReview = '[class="step-one"]'
    successMessage ='[style="font-size: 20px; font-family: garamond;"]'
    cartPage = '[class="active"]'
    emptyCart = '[class="text-center"]'
    dressCategory = '[class="title text-center"]'
    TshirtCategory = '[class="title text-center"]'
    brands = '[class="brands-name"]'
    brandPoloPage = '[class="title text-center"]'
    brandMadamPage = '[class="title text-center"]'
    productInCart = '[id="product-2"]'
    WriteReviewField = '[placeholder="Add Review Here!"]'
    caruselInner = '[id="slider-carousel"]'

    verifyWebPageVisisbility() {
        cy.get(this.check_webpage1).should('be.visible')
        cy.get(this.check_webpage2).should('be.visible')
        cy.get(this.homepage).should('be.visible')
    }

    WebpageVisability() {
        cy.get(this.homeLogo).should('be.visible')
        cy.get(this.productButton).should('be.visible')
        cy.get(this.loginSignupButton).should('be.visible')
    }

    EnterAccountInformationVerification() {
        cy.get(this.enterAccountInformation).should('be.visible')
    }

    NewUserSignUpVisability() {
        cy.get(this.newUserSignUpblock).should('be.visible')
    }

    UserLoggedInVisability() {
        cy.get(this.UserIsLoggedInAs).should('be.visible')
    }

    AccountCreatedVerification() {
        cy.get(this.accountcreated).should('be.visible')
    }


    accountIsDeletedVerification() {
        cy.get(this.accountIsDeleted).should('be.visible')
    }

    loginYourAccountVerification() {
        cy.contains('h2', 'Login to your account')
            .should('be.visible');
    }

    IncorrectEmailOrPassword() {
        cy.get('p').contains('Your email or password is incorrect!')
            .should('have.css', 'color', 'rgb(255, 0, 0)');
    }

    LoginPageVisability() {
        cy.get(this.loginPage).should('be.visible')
    }
    get
    ErrorEmailAddressAlreadyExist(){
        cy.get('p').contains('Email Address already exist!')
            .should('have.css','color', 'rgb(255, 0, 0)')
    };
    getInTouchVisability() {
        cy.get(this.getInTouch).should('be.visible')
    };
    testCasePageVisibility(){
        cy.get(this.testCasePage).should('be.visible');
    };
    searchedProductVisibility(){
        cy.get(this.productName).should('be.visible')
    }

    searchProductVisibility(){
        cy.get('div.step-one h2.heading')
            .should('be.visible')
            .and('contain', 'Address Details');
    };
    productNameIsVisible(){
        cy.contains(this.productName).should('be.visible')
    }

    SuccessfulMessegeIsVisible(){
        cy.get('[id="success-subscribe"]').should('be.visible')
    }
    ProductQuantityVerification() {
        cy.get('button.disabled').invoke('text').then((buttonText) => {
            cy.log(`Button text: ${buttonText}`);
            expect(buttonText.trim()).to.equal(products.quantity);
        });
    }
    ProductDetailsVisibility(){
        cy.get(this.addressAndReview).should('be.visible')
    }
    successMessageVisibility(){
        cy.get(this.successMessage).should('be.visible')
    }
    cartPageVisibility(){
        cy.get(this.cartPage).should('be.visible')
    }
    emptyCartVerification(){
        cy.get(this.emptyCart).should('be.visible')
    }
    LeftSideCategoryVerification(){
        cy.contains('h2', 'Category').should('be.visible')
    }
    dressCategoryvisibility(){
        cy.get(this.dressCategory).should('be.visible')
    }
    TshirtCategoryVisibility(){
        cy.get(this.TshirtCategory).should('be.visible')
    }
    brandPoloVisibility(){
        cy.get(this.brandPoloPage).should('be.visible')
    }
    brandsVisisbility(){
        cy.get(this.brands).should('be.visible')
    }
    brandMadamVisibility(){
        cy.get(this.brandMadamPage).should('be.visible')
    }
    productPageVisibility() {
        cy.get(this.productPage).should('be.visible')
    }
    productInCartVisibility(){
        cy.get(this.productInCart).should('be.visible')
    }
    WriteReviewVisibility(){
        cy.get(this.WriteReviewField).should('be.visible')
    }
    recomandedItemsVisibility(){
        cy.contains('h2.title.text-center', 'Features Items')
            .should('be.visible')
    }
    addressVerification(){
        cy.get('li.address_address1.address_address2').first().invoke('text')
            .then((firstAddress) => {
            cy.get('li.address_address1.address_address2').eq(1)
                .invoke('text').then((secondAddress) => {
                    expect(firstAddress.trim()).to.equal(secondAddress.trim());
            });
        });
    }
    caruselInnerVisibility(){
        cy.get(this.caruselInner).should('be.visible')
    }
};
