describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');

    cy.fixture('example.json').then((example) => {
      cy.log(example.name);
      cy.log(example["body"]);
    });

   // cy.fixture('test.txt').then((premennaText) => {
     // cy.log(premennaText);
   // });
  });
});
