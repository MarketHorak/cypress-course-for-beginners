describe('swag labs tests', () => {
  it('add product to cart', () => {

    // Arrange
    cy.visit('https://www.saucedemo.com/')

    // const itemName = 'Sauce Labs Bolt T-Shirt'
    // const itemPrice = '$15.99'

    // Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Assert
    cy.url().should('include', '/inventory.html')

    // toto neni spravne lebo sa mozu zmenit indexy (ked sa prida produkt)
    // cy.get('[data-test="inventory-item"]').eq(2).find('[data-test="item-1-title-link"]').click()

    cy.get('[data-test="inventory-item"]')
      .find('div[data-test="inventory-item-name"]')
     .contains('Sauce Labs Bolt T-Shirt')
    //  .contains(itemName)
      .click()
cy.pause()



















//     // Assert
//     cy.url().should('include', '/inventory-item.html')
//     cy.get('div[data-test="inventory-item-name"]').should('contain.text', itemName)
//     cy.get('div[data-test="inventory-item-price"]').should('contain.text', itemPrice)
//     cy.get('button[data-test="remove"]').should('not.exist')

//     cy.get('button[data-test="add-to-cart"]').click()
//     cy.get('button[data-test="add-to-cart"]').should('not.exist')
//     cy.get('button[data-test="remove"]').should('exist').and('contain.text', 'Remove')
//     cy.get('span[data-test="shopping-cart-badge"]')
//       .should('exist')
//       .and('be.visible')
//       .and('contain.text', '1')

cy.get('span[data-test="shopping-cart-badge"]')
  .should('exist')
  .and('be.visible')
  .and('contain.text', '1')

cy.get('a[data-test="shopping-cart-link"]').click()
cy.url().should('include', '/cart.html')
  })
})