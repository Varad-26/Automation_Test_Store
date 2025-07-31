class drop{

    hoverOver(){
        cy.get('#categorymenu').trigger('mouseover');
    }
clickTopMenu() {
    return cy.get('#main_menu').click();
  }

  hoverOverTopMenu() {
    return cy.get('#main_menu').trigger('mouseover');
  }

  clickSubMenu() {
    return cy.get('#main_menu').parent().find('.dropdown-menu').click();
  }
}

export default drop;