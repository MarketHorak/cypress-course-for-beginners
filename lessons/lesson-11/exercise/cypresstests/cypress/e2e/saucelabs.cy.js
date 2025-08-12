import ItemComponent from "../pages/components/ItemComponent";
import inventoryDetail from "../pages/inventoryDetail";
import InventoryPage from "../pages/inventoryPage";

describe("saucelab test", () => {
  beforeEach(() => {
    cy.visit("https:/www.saucedemo.com");
    cy.login("standard_user", "secret_sauce");
  });

  it("add products to cart", () => {
    const itemComponent = new ItemComponent("Sauce Labs Backpack");
    itemComponent.name().should("have.text", "Sauce Labs Backpack");
    const itemComponent2 = new ItemComponent("Sauce Labs Onesie");
    // itemComponent2.name().should("have.text", "Sauce Labs Onesie");
    itemComponent.openDetail();
    // otevrit detail

    inventoryDetail.addToCart();
    inventoryDetail.backToTheList();
    itemComponent2.addToCart();
    // inventoryDetail.backToTheListButton().click();

    // Dodelat  - kouknout do kosiku zkontrolovat cenu a odlogovat
    InventoryPage.goToCart();
    itemComponent.name().should("have.text", "Sauce Labs Backpack");
    // itemComponent2.name().should("have.text", "Sauce Labs Onesie");
  });
});
