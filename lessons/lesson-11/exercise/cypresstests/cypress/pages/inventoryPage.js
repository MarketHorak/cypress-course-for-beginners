export default new (class InventoryPage {
  shopingCart = () => cy.get('a[data-test="shopping-cart-link"]');
  goToCart() {
    this.shopingCart().click();
  }
})();
