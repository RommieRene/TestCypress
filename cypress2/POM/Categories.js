export default class Categories{
    women = '[href="#Women"]'
    dress = '[href="/category_products/1"]'
    man = '[href="#Men"]'
    Tshirts = '[href="/category_products/3"]'

    womenCategory(){
        cy.get(this.women).click()
    }
    dressSubCategory(){
        cy.get(this.dress).click()
    }
    manCategory(){
        cy.get(this.man).click()
    }
    TshirtsSubCategory(){
        cy.get(this.Tshirts).click()
    }
}