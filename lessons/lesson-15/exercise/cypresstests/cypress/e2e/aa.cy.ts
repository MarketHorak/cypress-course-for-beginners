describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('http://localhost:3000')
    cy.log(Cypress.env("pppp"))
  })
})