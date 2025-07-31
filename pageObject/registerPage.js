class register{

    goToRegisterPage() {
    cy.get('#customer_menu_top > li > a').click();
  }

 fillForm({ firstname, lastname, email, phone, fax, company, address1, address2, city, region, zipCode, Country, loginName, password, confirmPass }) {
  cy.get('[title="Continue"]').click();
  cy.get('[name="firstname"]').type(firstname);
  cy.get('[name="lastname"]').type(lastname);
  cy.get('#AccountFrm_email').type(email);
  cy.get('#AccountFrm_telephone').type(phone);
  cy.get('#AccountFrm_fax').type(fax);
  cy.get('#AccountFrm_company').type(company);
  cy.get('#AccountFrm_address_1').type(address1);
  cy.get('#AccountFrm_address_2').type(address2);
  cy.get('#AccountFrm_city').type(city);
  cy.get('[name="country_id"]').select(Country);
  cy.get('#AccountFrm_zone_id').select(region);
  cy.get('#AccountFrm_postcode').type(zipCode);
  cy.get('#AccountFrm_loginname').type(loginName);
  cy.get('#AccountFrm_password').type(password);
  cy.get('[name="confirm"]').type(confirmPass);
}


  selectNewsLetter(){
    cy.get('[name="newsletter"][value = "1"]').check();  //Radio Button
  }

  privacyPolicy(){
    cy.get('[name="agree"]').check();
  }

  submitForm(){
    cy.get('[title="Continue"]').click();
  }

  confirmMessage(){
  cy.url().should('include', 'account/success');
  }
}

export default register;