describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="nav-login"]').click()

    // Act
    cy.get('input[data-testid="email-input"]')
      .clear()
      .type('totojeemail@email.com')

    cy.get('input[data-testid="password-input"]')
      .clear()
      .type('Heslo1234!')
      .blur()

    cy.get('button[data-testid="login-btn"]').click()

    // Assert
    cy.contains('Welcome to Your Account').should('be.visible')
  })

  it('', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="nav-login"]').click()

    // Act
    cy.get('input[data-testid="email-input"]')
  })
})
