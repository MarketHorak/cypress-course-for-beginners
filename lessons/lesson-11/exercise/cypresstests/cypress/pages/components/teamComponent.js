class TeamComponent {
    index = 0;
    constructor(index) {
    this.index = index;
  }

  teamMemberWrapper = () =>
    cy.get('div[data-testid="team-member"]').eq(this.index);

    name =() => this.teamMemberWrapper().find ('[data-testid="member-name"]')
   // name =() => cy.get ('[data-testid="member-name"]')
    role =() => cy.get ('[data-testid="member-role"]')
    description =() => cy.get ('[data-testid="member-description"]')
}

export const teamComponent = (index) => new TeamComponent(index)