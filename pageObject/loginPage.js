class loginPage{

    navigate(){
        cy.get('#customer_menu_top').click();
    }

    login(loginname,password){
        if(loginname){
        cy.get('#loginFrm_loginname').type(loginname);
        }
        if(password){
        cy.get('#loginFrm_password').type(password);
        }
        cy.get('[title="Login"]').click();
    }

    verifySuccesslogin(){
        cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('be.visible');
    }

    verifyErrorMessage(){
        cy.get('.alert-error').should('contain','Error: Incorrect login or password provided.');
    }

    forgotPass(){
        cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').click();
    }
}

export default loginPage;