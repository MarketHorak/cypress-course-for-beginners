import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the login page", () => {
  //cy.visit("/login.html");
  cy.visit("http://127.0.0.1:5500/lessons/lesson-16/exercise/login.html");
});

When("the user enters username", () => {
  cy.get("#username").type("myUser");
});

When("the user enters password", () => {
  cy.get("#password").type("myPass");
});

When("the user clicks login", () => {
  cy.get('[data-testid="login-button"]').click();
});

Then("the error message", () => {
  cy.contains("Neplatné prihlasovacie údaje. Prosím, skúste znova.").should("be.visible");
});
// When("I visit ", () => {
//   cy.visit("http://127.0.0.1:5500/lessons/lesson-16/exercise/login.html"); // 
// });
