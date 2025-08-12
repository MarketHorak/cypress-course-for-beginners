export default class ItemComponent {
  itemName = "";
  constructor(itemName) {
    this.itemName = itemName;
  }
  // selectory
  nadrazenyParent = () =>
    cy
      .get('[data-test="inventory-item"]')
      // .find('[data-test="inventory-item-name"]')
      .contains(this.itemName)
      .parentsUntil("div.inventory_item");

  name = () => this.nadrazenyParent().find('[data-test="inventory-item-name"]');
  addToCartButton = () =>
    this.nadrazenyParent().find("button").contains("Add to cart");
  addToCart() {
    this.addToCartButton().click();
  }

  // openDetail () { this.na
  openDetail() {
    this.name().click();
  }
}
