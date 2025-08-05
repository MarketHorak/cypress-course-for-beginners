import menuComponent from "../pages/components/menuComponent";

class ContactPage {


 
    heading = () => cy.get('h1'); // Contact Us
    nameInput = () => cy.get('input[data-testid="name-input"]')
    emailInput = () => cy.get('input[data-testid="email-input"]')
    messageInput = () => cy.get('textarea[data-testid="message-input"]')
    sendButton = () => cy.get('button[data-testid="submit-button"]')

 insertContactData(nameValue, emailValue, messageValue) {
  this.nameInput()
    .clear()
    .type(nameValue)
    .blur()

  this.emailInput()
    .clear()
    .type(emailValue)
    .blur()

  this.messageInput()
    .clear()
    .type(messageValue)
    .blur()
}



  visit() {
    menuComponent.pointTo("contact");
  }
}
export const contactPage = new ContactPage();
