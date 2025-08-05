 import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'

describe('template spec', () => {
  it('passes', { retries: { openMode: 2 } }, () => {

    // ⭐ Arrange
    const url = Cypress.env('baseUrl');
    cy.visit(url);
    homePage.openLoginForm();

    // ⭐ Act
    loginPage.login(
      Cypress.env('username'),
      Cypress.env('password')
    );

    // ⭐ Assert
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
    cy.contains(`Welcome, ${Cypress.env('username')}!`).should('be.visible');
  });
});