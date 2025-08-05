// class MenuComponent {

//     homeLink = () => cy.get('[data-testid="nav-home"]')
//     courses = () => cy.get('[data-testid="nav-courses"]')
//     about = () => cy.get('[data-testid="nav-about"]')
//     contact = () => cy.get('[data-testid="nav-contact"]')
//     login = () => cy.get('[data-testid="nav-login"]')
//     registr = () => cy.get('[data-testid="nav-register"]')

// }
//  export const menuCompo = new MenuComponent()
/// ted cely zjednodusim =>

export default new class MenuComponent {

    navigation = () =>cy.get('nav')

    homeLink = () => this.navigation().find('[data-testid="nav-home"]')
    courses = () => this.navigation().find('[data-testid="nav-courses"]')
    about = () => this.navigation().find('[data-testid="nav-about"]')
    contact = () => this.navigation().find('[data-testid="nav-contact"]')
    login = () => this.navigation().find('[data-testid="nav-login"]')
    registr = () => this.navigation().find('[data-testid="nav-register"]')

    pointTo(pageLink) {
        switch (pageLink) {
            case 'home':
                this.homeLink().click()
                break;
            case 'courses':
                this.courses().click()
                break;
            case 'about':
                this.about().click()
                break;
            case 'contact':
                this.contact().click()
                break;
            case 'login':
                this.login().click()
                break;
            case 'registr':
                this.registr().click()
                break;
            default:
                throw new Error (`neni pico: ${pageLink}`)
                // jinak zapis = 
              //  throw new Error ("neni pico" + pageLink)


        }
    }

}