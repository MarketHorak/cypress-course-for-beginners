export default new class LoginPage
 {
  loginInput = () => cy.get('[data-testid="login-email-input"]')
  passwordInput = () => cy.get('[data-testid="login-password-input"]')
  loginButton = () => cy.get('[data-testid="login-submit-button"]')

  login(email: string, password: string, vek?: number) {
    this.loginInput().clear().type(email);
    this.passwordInput().clear().type(password);
    // Vek je nepovinný, zatím nevyužitý – můžeš doplnit třeba do logu
    this.loginButton().click();
  }

  loginWithInterface(data: LoginCredential) {
    this.login(data.email, data.password, data.vek);
  }
}



export interface LoginCredential {
  email: string;
  password: string;
  vek?: number;
}

// Alternativní varianta pomocí typu:
// export type LoginCredentialType = {
//   email: string;
//   password: string;
//   vek?: number;
// }

enum UserRole {
  ADMIN = 'Admin',
  EDITOR = 'Editor',
  VIEWER = 'Viewer',
}