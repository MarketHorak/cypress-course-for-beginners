describe("UI tests", () => {
  it("should search for an order and verify the result", () => {
    cy.visit("http://localhost:3000/orders");

    // Zachytí request na vyhledávání objednávek
    cy.intercept("GET", "http://localhost:3000/api/orders/search*").as(
      "searchOrders"
    );

    // Vyplní vyhledávací pole
    cy.get('[data-testid="search-input"]').type("Order One");

    // Klikne na tlačítko hledání
    cy.get('[data-testid="search-button"]').click();

    // Počká na zachycený request a ověří odpověď
    cy.wait("@searchOrders", { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body[0].id).to.eq(1);
    });

    // Ověří, že objednávka s ID 1 existuje v DOM
    cy.get('[data-testid="order-1"]').should("exist");
  });
});
