export default new class LoginSauce {
//  emailInput = () => cy.get('input[data-testid="email-input"]')
//  passwordInput = () => cy.get('input[data-testid="password-input"]')
//  loginButton = () => cy.get('button[data-testid="login-btn"]')
//  logoutButton = () => cy.get('button[data-testid="logout-button"]')
name = () => cy.get('input[data-test="username"]')
password = () => cy.get('input[data-test="password"]')
loginButton = () => cy.get('input[data-test="login-button"]')

 // vytvorim funkci s kontruktorem... nebo proste prvek -instanci z dane tridy
 login(username, passwordValue) {
    this.name().type(username);                // pokud se mi tam drzi focus dam .blur()
    this.password().type(passwordValue);        // pokud se mi tam drzi focus dam .blur()
    this.loginButton().click();

 }
}
