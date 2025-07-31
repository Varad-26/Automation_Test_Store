import drop from "../support/pageObject/dropDown";

describe('', () => {
 const dropDown = new drop();

    beforeEach(() => {
        cy.visit("https://automationteststore.com/"); 
    });

    it('Hover Over Main Menu', () => {

        dropDown.hoverOver();
        dropDown.hoverOverTopMenu('Apparel & accessories');
        dropDown.clickSubMenu('Apparel & accessories', 'Shoes');
    cy.url().should('include', 'apparel-accessories/shoes');
    });
});

