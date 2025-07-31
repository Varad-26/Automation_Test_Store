import Product from "../support/pageObject/productPage";

describe('', () => {
    const prod = new Product();

    it('Open a Product and Verify the Title', () => {

        cy.visit("https://automationteststore.com/");
        prod.selectFirstProduct().click();
        prod.getProductName().should('be.visible');
        
    });
});