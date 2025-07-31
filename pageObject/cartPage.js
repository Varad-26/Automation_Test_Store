class CartPage{

getCartTitle() {
    return cy.get('h1.heading1');
  }

  // Click "Checkout" button
proceedToCheckout() {
    return cy.get('.checkout_button').click();
  }
}

export default CartPage;