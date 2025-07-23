// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })




//  
describe('Login tests', () => {
   before(() => {
        // Spustí se jednou před všemi testy
        cy.log('Spouštím sadu testů ');
      });
 
  beforeEach(() => {
        // Přejdi na stránku přihlášení před každým testem
        cy.visit('http://127.0.0.1:5500/lessons/lesson-10/exercise/login.html');
      });

  // prvni test


  it('should validate all', () => {
  // Arrange
  //  cy.visit('http://127.0.0.1:5500/lessons/lesson-10/exercise/login.html');

// Act

// Assert
cy.get('input[data-testid="username-input"]')
  .should('be.visible')
  .and('have.value', '');

cy.get('input[id="password"]')
  .should('be.visible')
  .and('have.value', '');

cy.get('button[data-testid="login-button"]')
  .should('be.visible')
  .and('be.enabled')
  .and('have.attr', 'type', 'submit');

  });



  // ---------------------DRUHY TEST  ---------------------------//
  // muzu sem pridat napr it.skip nebo it.only

it(' error message - spatny login na login page', () => {
 // Arrange
 // cy.visit('http://127.0.0.1:5500/lessons/lesson-10/exercise/login.html');

  const username = 'invalidUser';
  const password = 'invalidPass';

  cy.naslogin(username, password)
  // Act

  // TADY MUZU NAHRADIT COMMANDEM -----"""""
  // __________________________________________
  // cy.get('input[data-testid="username-input"]')
  //   .type(username);

  // cy.get('input[id="password"]')
  //   .type(password);
  //   cy.get('button[data-testid="login-button"]')
  // .click();
 // TADY MUZU NAHRADIT COMMANDEM ZA TOTO----"""""
  // __________________________________________




// Assert
cy.get('div[data-testid="error-message"]')
  .should('be.visible')
  .and('contain.text', 'Nesprávne prihlasovacie údaje');

cy.get('div[data-testid="success-message"]')
  .should('not.be.visible');
});

// sakra tady TRETI TEST CO NESTIHAM
it.only(' message a presmerovano na Login page', () => {
  // Arrange
 // cy.visit('http://127.0.0.1:5500/lessons/lesson-10/exercise/login.html');

  const username = 'user';
  const password = 'pass';

  // Act
  cy.get('input[data-testid="username-input"]')
    .type(username);

  cy.get('input[id="password"]')
    .type(password);

  cy.get('button[data-testid="login-button"]')
    .click();

  // Assert
  cy.get('div[data-testid="error-message"]')
    .should('not.be.visible');

  cy.get('div[data-testid="success-message"]')
    .should('be.visible');

  cy.url().should('include', '/dashboard.html');
});
    


});