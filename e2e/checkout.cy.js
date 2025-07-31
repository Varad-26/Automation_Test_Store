// import ProductPage from '../support/pageObjects/productPage';
// import CartPage from '../support/pageObjects/cartPage';
import CheckoutPage from '../support/pageObjects/checkoutPage';

describe('Checkout Process Test', () => {
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('Should proceed to checkout from the cart page', () => {
    cy.visit("https://automationteststore.com/");
    productPage.selectFirstProduct().click();
    productPage.addToCart();
    cartPage.proceedToCheckout();
    checkoutPage.getCheckoutTitle().should('contain.text', 'Checkout');
  });
});
