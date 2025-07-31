class Product{

   selectFirstProduct() {
    return cy.get('.prdocutname').first();
  }

  addToCart() {
    return cy.get('.cart').click();
  }

  getProductName() {
    return cy.get('h1.productname');
  }

}

export default Product;