// LAZY SINGLTON
export default new (class Loginpage {
  // getEmailInput() {
  //     return cy.get('input[data-testid="email-input"]')
  // };
  // getPasswordInput () {
  //     return ('input[data-testid="password-input"]')
  // };
  // getLoginButton (){
  //     cy.get('button[data-testid="login-btn"]')
  // }

  emailInput = () => cy.get('input[data-testid="email-input"]');
  passwordInput = () => cy.get('input[data-testid="password-input"]');
  loginButton = () => cy.get('button[data-testid="login-btn"]');
  logoutButton = () => cy.get('button[data-testid="logout-button"]');

  // vytvorim funkci s konstruktorem... nebo proste prvek -instanci z dane tridy
  login(emailValue, passwordValue) {
    this.emailInput().type(emailValue); // pokud se mi tam drzi focus dam .blur()
    this.passwordInput().type(passwordValue); // pokud se mi tam drzi focus dam .blur()
  }
})();

// nebo takto ...SINGLTON ....pokud pouziju toto tak pak musim dat v describe
// import {loginPage} from "../pages/loginPage"
// export const loginPage = new Loginpage()
