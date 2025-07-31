import register from "../support/pageObject/registerPage";


describe('Register Page', () => {

    const reg = new register();

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        reg.goToRegisterPage();
    });

    it('Register with All the Details', () => {

       reg.fillForm({
        firstname: 'kunal',
        lastname: 'Doe',
        email: 'kunal121@example.com',
        phone: '963254842',
        fax: '123456',
        company: 'companyName',
        address1: 'Nashik, Near Alpha Tower',
        address2: 'address2 is far away from address1',
        city: 'Nashik',
        region: 'Maharashtra',
        zipCode: '402215',
        Country: 'India',
        loginName: 'kunal5',
        password: '1234',
        confirmPass: '1234', 
       }); 

        reg.selectNewsLetter();
        reg.privacyPolicy();
        reg.submitForm();
        reg.confirmMessage();
    });

    it('Try Register with EXISTING Email ID', () => {

        const existEmail = 'kunal12@example.com';

        reg.fillForm({
        firstname: 'kunal',
        lastname: 'Doe',
        email: existEmail,
        phone: '963254842',
        fax: '123456',
        company: 'companyName',
        address1: 'Nashik, Near Alpha Tower',
        address2: 'address2 is far away from address1',
        city: 'Nashik',
        region: 'Maharashtra',
        zipCode: '402215',
        Country: 'India',
        loginName: 'kunal15',
        password: '1234',
        confirmPass: '1234',
        })

        reg.privacyPolicy();
        reg.submitForm();

        cy.get('.alert').should('contain','Error: E-Mail Address is already registered!');
        
    });

});