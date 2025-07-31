class CheckoutPage {
  //checkout page title
  getCheckoutTitle() {
    return cy.get('h1.heading1');
  }
}

export default CheckoutPage;
