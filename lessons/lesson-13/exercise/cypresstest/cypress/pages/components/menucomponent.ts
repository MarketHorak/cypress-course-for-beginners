export default new class MenuComponent {

  homeMenuItem = () => cy.get('[data-testid="menu-home"]')
  registrationMenuItem = () => cy.get('[data-testid="menu-registration"]')
  loginMenuItem = () => cy.get('[data-testid="menu-login"]')
  aboutUsMenuItem = () => cy.get('[data-testid="menu-about"]')
  contactMenuItem = () => cy.get('[data-testid="menu-contact"]')

  navigate(pagename: MenuItem) {
    switch (pagename) {
      case MenuItem.HOME:
        this.homeMenuItem().click()
        break
      case MenuItem.REGISTRATION:
        this.registrationMenuItem().click()
        break
      case MenuItem.LOGIN:
        this.loginMenuItem().click()
        break
      case MenuItem.ABOUTUS:
        this.aboutUsMenuItem().click()
        break
      case MenuItem.CONTACT:
        this.contactMenuItem().click()
        break
    }
  }
}

export enum MenuItem {
  HOME = 'Home',
  REGISTRATION = 'Registration',
  LOGIN = 'Login',
  ABOUTUS = 'About us',
  CONTACT = 'Contact',
}