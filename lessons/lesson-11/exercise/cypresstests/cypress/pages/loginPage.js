// LAZY SINGLTON
export default new class Loginpage {
    getEmailInput() {
        return cy.get('input[data-testid="email-input"]')
    };
    getPasswordInput () {
        return ('input[data-testid="password-input"]')
    };
    getLoginButton (){
        cy.get('button[data-testid="login-btn"]')
    }

 emailInput = () => cy.get('input[data-testid="email-input"]')
 passwordInput = () => cy.get('input[data-testid="password-input"]')
 loginButton = () => cy.get('button[data-testid="login-btn"]')

}

// nebo takto ...SINGLTON
// export const loginPage = new Loginpage()