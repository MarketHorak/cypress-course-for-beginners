// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


import loginPage, { LoginCredential } from "../pages/loginPage";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/login')

    loginPage.login('valid@email.cz', 'Heslo123!')
    loginPage.login('valid@email.cz', 'Heslo123!', 33)

    cy.pause()

    const creditials: LoginCredential = {
      email: 'email@email.cz',
      password: 'Heslo123',
    }

    loginPage.loginWithInterface(creditials)

    cy.pause()

    loginPage.loginWithInterface({
      email: 'totoje@email.cz',
      password: 'Heslo123!'
    } as LoginCredential)
  })
})