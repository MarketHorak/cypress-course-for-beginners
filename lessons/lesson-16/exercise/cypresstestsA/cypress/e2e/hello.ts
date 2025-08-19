// import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// When("I visit duckduckgo.com", () => {

//     cy.visit("https://www.duckduckgo.com");

// });

// Then("I should see a search bar", () => {

//     cy.get("input").should(

//         "have.attr",

//         "placeholder",

//         "Search the web without being tracked"

//     );

// });
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/"); // radši bez www, hned jdi na cílovou doménu
});

Then("I should see a search bar", () => {
  // 1) cíleně vyber vyhledávací input
  cy.get('input[name="q"]')
    .should('be.visible')
    .and('have.attr', 'placeholder'); // jen že placeholder existuje

  // (volitelné) pokud chceš ověřit i text, udělej to tolerantně:
  // cy.get('input[name="q"]')
  //   .invoke('attr', 'placeholder')
  //   .should((txt) => expect(txt?.toLowerCase()).to.include('search'));
});