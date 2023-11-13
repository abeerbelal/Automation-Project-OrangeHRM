// cypress/support/commands.d.ts
import LoginPage from "./log-in/page-object/log-in";
declare namespace Cypress {
    interface Chainable {
     visitAndLogin(pageObj: LoginPage, username: string, password: string);
     apiDeleteRequest(url: string, data: object = {});
     apiPutRequest(url: string);
    }
  }
  