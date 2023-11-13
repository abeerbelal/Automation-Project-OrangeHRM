export default class statusAssertion {
  elements = {
    status: () => cy.get(".orangehrm-recruitment-status > .oxd-text"),
  };

  verifyPassedInterviewStatus(passed: string) {
    this.elements.status().should("have.text", passed);
  }
  verifyFailedInterviewStatus(failed: string) {
    this.elements.status().should("have.text", failed);
  }
}
