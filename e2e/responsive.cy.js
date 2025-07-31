
describe('Responsiveness of Website', () => {
    it('should display all the Components', () => {

        cy.visit("https://automationteststore.com/");
        //header
        cy.get('.navbar-inverse').should('be.visible');
        //footer
        cy.get('#footer').should('be.visible');
        //navbar
        cy.get('.subnav').should('be.visible');
        //Banner
        cy.get('.oneByOneSlide').should('be.visible');
        //Products
        cy.get('#maincontainer').should('be.visible');

        
    });
});