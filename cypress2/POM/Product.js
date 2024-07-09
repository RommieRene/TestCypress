export default class Product {
    quantity = '4'


    productsButton = '[class="material-icons card_travel"]'
    viewProductButton = '[href="/product_details/1"]'
    productList = '[class="col-sm-9 padding-right"]'
    productDetail = '[class="product-information"]'
    name =   'Blue Top';
    price = 'Rs. 500'
    searchProduct = '[id="search_product"]'
    ProductName = 'Men Tshirt'
    searchButton = '[id="submit_search"]'
    firstProduct = '[src="/get_product_picture/1"]'
    secondProduct = '[src="/get_product_picture/2"]'
    addCartFirstProduct = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
    addCartSecondProduct = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn'
    continueShoppingButton = '[data-dismiss="modal"]'
    productQuantityField = '[id="quantity"]'
    brandPolo = '[href="/brand_products/Polo"]'
    brandMadam = '[href="/brand_products/Madame"]'


    clickOnProductButton() {
        cy.get(this.productsButton).click()
    }
    clickOnViewProductButton() {
        cy.get(this.viewProductButton).click()
    }
    productListVisibility(){
        cy.get(this.productList).should('be.visible')
    }
    productDetailVisibility() {
        cy.get(this.productDetail).should('be.visible')
    }
    productName(){
        cy.contains(this.name).should('be.visible');
    }
    productCategory(){
        cy.get('p').contains('Category: Women > Tops').should('be.visible');
    }
    productPrice() {
        cy.contains(this.price).should('be.visible')
    }
    productAvailability(){
        cy.contains('p', 'Availability: In Stock').should('be.visible');
    }
    productCondition(){
        cy.contains('p', 'Condition: New').should('be.visible');
    }
    productBrand() {
        cy.contains('p', 'Brand: Polo').should('be.visible')
    }
    searchProductName(){
        cy.get(this.searchProduct).type(this.ProductName)
        cy.get(this.searchButton).click()
    }
    hoverOverFirstProduct(){
        cy.get(this.firstProduct).trigger('mouseover')
    }
    hoverOverSecondProduct(){
        cy.get(this.secondProduct).trigger('mouseover')
    }
    clickAddToCartFirstProduct(){
        cy.get(this.addCartFirstProduct).click()
    }
    clickAddToCartSecondProduct(){
        cy.get(this.addCartSecondProduct).click()
    }
    clickContinueShoppingButton(){
        cy.get(this.continueShoppingButton).click()
    }
    increaseProductQuantity(){
        cy.get(this.productQuantityField).clear();
        cy.get(this.productQuantityField).type(this.quantity);
    }
    addToCart(){
        cy.get('button.btn.btn-default.cart').click()
    }

    clickSubBrandPolo(){
        cy.get(this.brandPolo).click()
    }
    clickSubBrandMadam(){
        cy.get(this.brandMadam).click()
    }
    clickAddToCartButton(){
        cy.contains('a', 'Add to cart')
            .should('be.visible')
            .click();
    }
    clickSignUpButton(){
        cy.contains('a', 'Signup / Login')
            .should('be.visible')
            .click();
    }


}