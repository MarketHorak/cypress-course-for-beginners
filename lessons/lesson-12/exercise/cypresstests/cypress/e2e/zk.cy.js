describe("Check config env", () => {
  it("logs apiUrl from config file", () => {
    cy.log("API URL z configu je: " + Cypress.env("apiUrl"));
    cy.log("URL z configu je: " + Cypress.env("url"));
  });
});
describe("template spec", () => {
  it("passes", () => {
    // cy.visit("https://example.cypress.io"); // nebo cy.visit("/")
    //  cy.visit("http://localhost:3000/"); // nebo cy.visit("/")

    cy.log("pppp: " + String(Cypress.env("pppp")));
    cy.log("a: " + String(Cypress.env("a")));
  });
});
