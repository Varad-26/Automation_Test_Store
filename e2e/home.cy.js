import homePage from "../support/pageObject/homePage";

describe('', () => {

    const Home = new homePage();

    beforeEach(() => {
        Home.visit();
    });

    it('Checks Banner Visibility and Auto-slide', () => {

    // Check banner
    Home.getBanner();
    cy.wait(5000);
    cy.get('[style="display: none; left: 0px;"]').should('exist');
    });

    it('Verifies at least 4 Prodcts are Visible/Shown', () => {
        Home.getproduct().should('have.length.gte',4);
    });

    it('Navbar Verification & hoverOver on the Main Menu', () => {
        Home.getnavBar();
        Home.hoverOverMainMenu();
    });

});