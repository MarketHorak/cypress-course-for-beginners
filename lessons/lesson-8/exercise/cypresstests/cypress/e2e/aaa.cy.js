describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/lessons/lesson-8/exercise/login.html')


    // cy.get('[data-testid="welcome-message"]').should('have.text', 'Welcome back!');
    cy.get('input[placeholder="Zadajte používateľské meno"]')
      .should('exist');
    cy.get('[data-testid="password-input"]')
      .should('be.visible');

    cy.get('[data-testid="password-input"]')
      .should('be.visible')
      .and('have.attr', 'type', 'password');

    cy.get('[data-testid="login-button"]')
      .should('be.disabled')
      .and('contain', 'Prihlásiť');




    // Vyplním  jména
    cy.get('[data-testid="username-input"]').type('kokos');

    // Vyplnění hesla
    cy.get('[data-testid="password-input"]').type('tajneheslo');

    // Ověření, tla49tka
    cy.get('[data-testid="login-button"]').should('not.be.disabled');

    // po zadani mena, hesla , overit ze prihlasit button je v stave enabled
    // zadame hodnotu do meno + heslo , stlacime vymazat a overtime ze meno a heslo nema value and prihlasit je disabled
    cy.get('[data-testid="username-input"]').type('testuser');
    cy.get('[data-testid="password-input"]').type('tajneheslo');

    cy.get('[data-testid="login-button"]').should('be.enabled');

    cy.get('[data-testid="reset-button"]').click();

    cy.get('[data-testid="username-input"]').should('have.value', '');
    cy.get('[data-testid="password-input"]').should('have.value', '');

    cy.get('[data-testid="login-button"]').should('be.disabled');


    // zadat "user" do username pola, "pass" do hesla, vybrat Role, zaskrtnut "Zapamatat si" ,
    //  click na prihlasit a overit ze sme na stranke Dashboard


    // Vyplnění přihlašovacích údajů
    cy.get('[data-testid="username-input"]').type('user');
    cy.get('[data-testid="password-input"]').type('pass');

    // Výběr role (předpokládáme select prvek)
    cy.get('[data-testid="role-select"]').select('Admin'); // nebo jiná hodnota podle DOM

    // Zaškrtnutí checkboxu "Zapamätať si"
    cy.get('[data-testid="remember-checkbox"]').check();

    // Kliknutí na tlačítko Prihlásiť
    cy.get('[data-testid="login-button"]').click();

    // Ověření přesměrování na Dashboard
    cy.url().should("contain", "Dashboard")
    cy.contains('Dashboard').should('be.visible');

    // musim dodelat!!!!!!!!!!!!!!!!!!!
  });
});

