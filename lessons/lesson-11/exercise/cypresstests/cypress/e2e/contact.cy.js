import { contactPage } from "../pages/contactPage";
import contactData from "../fixtures/contactForm.json";
import { not } from "joi";

describe("registr tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        contactPage.visit()
        cy.contains('Contact Us').should('be.visible');

   // opet jsem vlozila do registrationPage.js a volam viz radek vejs
   //      menuComponent.pointTo("registr")
         // misto tohoto 
        // menuComponent.registr().click()
             // misto tohoto 
            // cy.visit("http://localhost:3000/register")
    });

it('should take data with fce from class contactPage', () => {
  // Act
  contactPage.insertContactData(
    contactData.name,
    contactData.email,
    contactData.message
  );
  contactPage.sendButton().click();
    // Assert
  cy.contains('Message sent successfully!').should('be.visible');
//   cy.url().should('contain', 'dashboard.html');
 }); 

it('should be error invalid data and show error message', () => {
   // Act
  contactPage.insertContactData(
    contactData.name,
    contactData.wrongemail,
    contactData.message
  );
  contactPage.sendButton().should('be.disabled')
    // Assert
  cy.contains('Please enter a valid email address').should('be.visible');

  //   cy.url().should('contain','Password must contain at least one special character')\
  //  //   cy.contains('Invalid email format').should('be.visible');
});






 });