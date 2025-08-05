export default new class LoginPage {
  // wrapper vybere hlavní kontejner pro login
  wrapper = () => cy.get('.login-container');

  // jednotlivé prvky (inputy a tlačítko)
  usernameInput = () => this.wrapper().find('[data-testid="login-username-input"]');
  passwordInput = () => this.wrapper().find('[data-testid="login-password-input"]');
  submitButton  = () => this.wrapper().find('[data-testid="login-submit-button"]');

  // metoda pro login
  login(username, password) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.submitButton().click();
  }
}