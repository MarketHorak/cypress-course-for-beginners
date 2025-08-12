export default new (class InventoryDetail {
  addToCartButton = () => {
    return cy.get('[data-test="add-to-cart"]');
  };

  addToCart() {
    this.addToCartButton().click();
  }

  backToTheListButton = () => {
    // mama navic return
    return cy.get('[data-test="back-to-products"]');
  };

  backToTheList() {
    this.backToTheListButton().click();
  }
})();
