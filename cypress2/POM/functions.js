export  default class functions {

    url = 'https://automationexercise.com/';
    testCasesPageButton = '[class="fa fa-list"]';


    visitToHomePage(){
        cy.visit(this.url);
    };

   
};
