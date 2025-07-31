import loginPage from "../support/pageObject/loginPage";

describe('', () => {

    const logIn = new loginPage();

    beforeEach(() => {
         cy.visit("https://automationteststore.com/");
         logIn.navigate();
    });

    it('LogIn with Valid Credentials', () => {
        logIn.login('user11','1234');
        
        // logIn.forgotPass(); 
    });

    it('LogIn fails with Wrong password', () => {
        logIn.login('user11','123');
        logIn.verifyErrorMessage();
    });

    it('Fails to login with Empty Fields', () => {
        logIn.login("","");
        cy.get('.alert-error').should('contain','Error: Incorrect login or password provided.');
    });
});