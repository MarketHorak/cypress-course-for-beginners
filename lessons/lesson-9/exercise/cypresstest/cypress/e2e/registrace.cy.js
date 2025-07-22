/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('registrace', () => {
  it('faker registrace', () => {
    cy.visit('http://127.0.0.1:5500/lessons/lesson-9/exercise2/registration.html');

    const userName = faker.internet.username();
    const userEmail = faker.internet.email();
    const userPassword = faker.internet.password();

    cy.log(userEmail);
    cy.log(userName);
    cy.log(userPassword);

    cy.get('input[data-testid="reg-username-input"]').type(userName);
    cy.get('input[data-testid="reg-email-input"]').type(userEmail);
    cy.get('input[data-testid="reg-password-input"]').type(userPassword);
    cy.get('button[data-testid="reg-submit-button"]').click();
  });
});
    

