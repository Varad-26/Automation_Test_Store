class homePage{

    visit(){
        cy.visit("https://automationteststore.com/");
    }

    getBanner(){
        return cy.get('.slider');
    }
    
    getproduct(){
       return cy.get('.list-inline');
    }

    getnavBar(){
        cy.get('.container-fixed > :nth-child(2) > :nth-child(1)')
    }

    hoverOverMainMenu(menuText) {
   cy.get('.nav-pills > :nth-child(1) > .active').trigger('mouseover');
  }
}

export default homePage;