import { candidteID } from "./../helpers/create-employee-jobTitle-vacancy-helper";
export default class passesFailedStatus {
  elements = {
    passesButton: () => cy.get(".oxd-button--success"),
    failedButton: () =>
      cy.get(".orangehrm-recruitment-actions > :nth-child(2)"),
    saveButton: () => cy.get(".oxd-button--secondary"),
  };

  passesINterview() {
    cy.intercept(`web/index.php/recruitment/addCandidate/${candidteID}`);
    this.elements.passesButton().click({ force: true });
    this.elements.saveButton().click({ force: true });
  }
  failsInterview() {
    cy.intercept(`web/index.php/recruitment/addCandidate/${candidteID}`);
    this.elements.failedButton().click({ force: true });
    this.elements.saveButton().click();
  }
}
