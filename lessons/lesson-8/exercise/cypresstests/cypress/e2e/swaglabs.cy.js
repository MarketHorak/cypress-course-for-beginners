describe('swag labs tests', () => {
    it('add product to cart', () => {

        // Arrange
        cy.visit('https://www.saucedemo.com/')

        const itemName = 'Sauce Labs Bolt T-Shirt'
        const itemPrice = '$15.99'

        // Act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // Assert
        cy.url().should('include', '/inventory.html')

        // toto neni spravne ....asi jasne indexy pac je mohu pridat
        // cy.get('[data-test="inventory-item"]').eq(2).find('[data-test="item-1-title-link"]').click()

        cy.get('[data-test="inventory-item"]')
            .find('div[data-test="inventory-item-name"]')
            .contains(itemName)
            .click()

        // Assert
        cy.url().should('include', '/inventory-item.html')
        cy.get('div[data-test="inventory-item-name"]').should('contain.text', itemName)
        cy.get('div[data-test="inventory-item-price"]').should('contain.text', itemPrice)
      //  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()


    })
})