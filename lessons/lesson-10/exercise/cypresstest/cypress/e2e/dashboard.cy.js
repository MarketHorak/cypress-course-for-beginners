<reference types="cypress" />;

describe("Dashboard – Dashboard tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/lessons/lesson-10/exercise/login.html");
    cy.fixture("users.json").then((users) => {
      cy.nasLogin(users.validUserName, users.validPassword);
    });
  });

  it("should be able to read valid user name on Dashboard page", () => {
    cy.get('[data-testid="username"]')
      .should("be.visible")
      .and("contain.text", "demoUser");
  });

  it("should filtr Dashboard page", () => {
    cy.get('input[data-testid="checkbox1"]')
      .should("exist")
      .and("not.be.checked")
      .check()
      .should("be.checked");
  });

  // it ('should be filtred by iteam name', ()=>{
  //   cy.fixture ("data.json").then(data) =>    {

  //   });

  // });
});
