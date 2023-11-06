// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "./log-in/page-object/log-in";
import "cypress-file-upload";
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      visitAndLogin: typeof visitAndLogin;
    }
  }
}

function visitAndLogin(pageObj: LoginPage, username: string, password: string) {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  pageObj.logIn(username, password);
}

Cypress.Commands.add("visitAndLogin", visitAndLogin);
