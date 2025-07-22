describe('sauce demo', () => {
  it('login users', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.fixture('testusers.json').then((users) => {
      users.forEach((user) => {
        cy.log(user.username);

        cy.get('[data-test="username"]').clear().type(user.username);
        cy.get('[data-test="password"]').clear().type(user.password);
        cy.get('[data-test="login-button"]').click();

 if (user.isValid===true) {
          cy.url().should('include', 'inventory.html');
           cy.visit('https://www.saucedemo.com/');
        } else {
          cy.get('[data-test="error-button"]').should('be.visible');
        
        }
        // cy.get('#react-burger-menu-btn').click();
        // cy.get('#logout_sidebar_link').click();
      });
    });
  });
});











