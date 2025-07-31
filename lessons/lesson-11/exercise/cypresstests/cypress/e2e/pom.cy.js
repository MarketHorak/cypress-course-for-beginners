import loginPageNeboCokoliv from "../pages/loginPage";

// nebo takto ...SINGLTON ....pokud pouziju toto tak pak tu musim
// import {loginPage} from "../pages/loginPage"

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="nav-login"]').click();

    // ------------------Act---------------- /////////////////////////
    //------------------------------------

    // cy.get('input[data-testid="email-input"]')
    //   .clear()
    //   .type('totojeemail@email.com')

    loginPageNeboCokoliv.emailInput().type("tohlejeemail@email.cz");
    //------------------------------------
    // cy.get('input[data-testid="password-input"]')
    //   .clear()
    //   .type('Heslo1234!')
    //   .blur()

    loginPageNeboCokoliv.passwordInput().type("Heslo1234?");
    loginPageNeboCokoliv.loginButton().click();
    cy.contains("Welcome to Your Account").should("be.visible");
    loginPageNeboCokoliv.logoutButton().click();

    //------------------------------------
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="nav-login"]').click();
    // misto obojeho muzu napsat
    loginPageNeboCokoliv.login("blalabla@email.cz", "Nazdar123!");

    // cy.get('button[data-testid="login-btn"]').click()

    // Assert
    loginPageNeboCokoliv.loginButton().click();
    cy.contains("Welcome to Your Account").should("be.visible");
   
  });

  it.skip("", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="nav-login"]').click();

    // Act
    cy.get('input[data-testid="email-input"]');
  });
});
