class RegistrationPage {

    heading = () => cy.get('h1');
    usernameInput = () => cy.get('input[data-testid="username-input"]')
    emailInput = () => cy.get('input[data-testid="email-inputXXX"]')
    passwordInput = () => cy.get('input[data-testid="password-input"]')
    registerButton = () => cy.get('button[data-testid="register-btn"]')

    insertRegisterData(usernameValue, emailValue, passwordValue) {
  this.usernameInput()
    .clear()
    .type(usernameValue)
    .blur()

  this.emailInput()
    .clear()
    .type(emailValue)
    .blur()

  this.passwordInput()
    .clear()
    .type(passwordValue)
    .blur()
}

}
export const registrationPage = new RegistrationPage()