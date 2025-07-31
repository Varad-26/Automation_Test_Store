import footer from "../support/pageObject/footerPage";

describe('Footer Links', () => {

    const foter = new footer();
    
    it('should navigate to the Particular Page', () => {
        cy.visit("https://automationteststore.com/");

        foter.clickFooterLink('Privacy Policy');
        cy.url().should('include', 'content&content_id=2');

        foter.clickFooterLink('About Us');
        cy.url().should('include', 'content&content_id=1');

        foter.clickFooterLink('Return Policy');
        cy.url().should('include', 'content&content_id=3');

        foter.clickFooterLink('Shipping');
        cy.url().should('include', 'content&content_id=4');

        foter.clickFooterLink('Contact Us');
        cy.url().should('include', 'content/contact');
        
        foter.clickFooterLink('Site Map');
        cy.url().should('include', 'content/sitemap');

        foter.clickFooterLink('Login');
        cy.url().should('include', 'account/login');
    });
});