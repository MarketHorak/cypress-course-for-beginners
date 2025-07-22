describe('testovanie adress', () => {
    it('overenie stranky', () => {
        cy.visit('http://127.0.0.1:5500/lessons/lesson-9/exercise/index.html');

        cy.url().should('include', 'lesson-9/exercise/index.html');
        cy.get('input[data-testid="search-input"]')
            .should('be.visible')
            .and('have.value', '');

        cy.get('button[data-testid="search-button"]')
            .should('be.visible')
            .and('be.enabled');
        cy.get('input[data-testid="search-input"]')


   cy.fixture('adresy.json').then((adresy) => {
      adresy.forEach((adresa) => {
        cy.log(adresa.hledanaAdresa);

                cy.get('input[data-testid="search-input"]')
                    .clear()
                    .type(adresa.hledanaAdresa)

                cy.get('button[data-testid="search-button"]').click()
                // Ověření, že první výsledek obsahuje očekávaný kód
                cy.get('[data-testid="result-display"]')
                    .find('[class="result-item"]') // tady mam chybu
                    .eq(0)
                    .should('contain', adresa.ruianKod)

              // Ověření počtu výsledků
        cy.get('[data-testid="result-display"]')
          .find('[class="result-item"]')
          .should('have.length', adresa.ocekavanyPocetAdres);
      });
    });
  });
});
// uf 



