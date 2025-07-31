import ProductPage from '../support/pageObjects/productPage';
import CartPage from '../support/pageObjects/cartPage';

describe('Cart Functionality Test', () => {
  const prod = new ProductPage();
  const cart = new CartPage();

  it('Should add a product to the cart and verify cart page', () => {
    cy.visit("https://automationteststore.com/");
    prod.selectFirstProduct().click();
    prod.addToCart();
    cart.getCartTitle().should('contain.text', 'Shopping Cart');
  });
});