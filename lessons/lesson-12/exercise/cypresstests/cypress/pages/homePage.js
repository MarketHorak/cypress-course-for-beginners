export default new class HomePage {
  wrapper = () => cy.get('.home-container')

  loginFormButton = () => this.wrapper().find('[data-testid="login-button"]')

  openLoginForm() {
    this.loginFormButton().click()
  }
}