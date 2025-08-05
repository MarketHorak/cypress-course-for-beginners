import { registrationPage } from "../pages/registrationPage";
import registrData from "../fixtures/registerUser.json";
// import menuComponent from "../pages/components/menuComponent"


describe("registr tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        registrationPage.visit()

   // opet jsem vlozila do registrationPage.js a volam viz radek vejs
   //      menuComponent.pointTo("registr")
         // misto tohoto 
        // menuComponent.registr().click()
             // misto tohoto 
            // cy.visit("http://localhost:3000/register")
    });

it('should register with fce from class RegistrationPage', () => {
  // Act
  registrationPage.insertRegisterData(
    registrData.username,
    registrData.email,
    registrData.password
  );
  registrationPage.registerButton().click();
    // Assert
  cy.url().should('contain', 'account');
//   cy.url().should('contain', 'dashboard.html');
 });




it('should not register new user with invalid credentials and show error message', () => {
  // Act
  registrationPage.insertRegisterData(
    registrData.username,
    registrData.wrongemail,
    registrData.wrongpassword
  );
//   // Assert
  cy.contains('Password must contain at least one special character').should('be.visible');

  //   cy.url().should('contain','Password must contain at least one special character')\
  //  //   cy.contains('Invalid email format').should('be.visible');
});

//////////////////////////////////////////////////////////////////////////////////////////////


    it("take data json", () => {
        registrationPage.usernameInput()
            .clear()
            .type(registrData.username)


        registrationPage.emailInput()
            .clear()
            .type(registrData.email)

        registrationPage.passwordInput()
            .clear()
            .type(registrData.password)

        registrationPage.registerButton()
            .click()
    });



    it("Should validate", () => {
        registrationPage.heading()
            .should("be.visible")
            .should("have.text", "Register")

        registrationPage.usernameInput()
            .should("be.visible")

        registrationPage.emailInput()
            .should("be.visible")

        registrationPage.passwordInput()
            .should("be.visible")

        registrationPage.registerButton()
            .should("be.visible")

    });
    it("registr new user", () => {
        //  registrationPage.usernameInput().clear().type("testovaciuser")

        registrationPage.usernameInput()
            .clear()
            .type('prosteuser')


        registrationPage.emailInput()
            .clear()
            .type('valid@email.com')

        registrationPage.passwordInput()
            .clear()
            .type('ValidPassword123!')

        registrationPage.registerButton()
            .click()

    })
});
