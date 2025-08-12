import { teamComponent } from "../pages/components/teamComponent";
describe('Team tests', () => {
  it('should validate team member name', () => {

    cy.visit('http://localhost:3000/about');

    const member1 = teamComponent(0);
    member1.name().should('have.text','Jane Smith' )

     const member2 = teamComponent(1);
    member2.name().should('have.text','Mike Johnson' )

     const member3 = teamComponent(2);
    member3.name().should('have.text','Anna Brown' )
  });
});