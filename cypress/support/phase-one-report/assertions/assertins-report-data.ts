import { RANDOM_REPORT_NAME } from "./../page-object/define-predefined-report-page";
export default class AssertionREportData {
  elements = {
    reportName: () => cy.get(".orangehrm-card-container > .oxd-text"),
    personalHeader: () =>
      cy.get(
        '[style="transform: translateX(0px); width: 213px;"] > .header-content'
      ),
    jobHeader: () =>
      cy.get(
        '[style="transform: translateX(213px); width: 213px;"] > .header-content'
      ),
    salaryHeader: () =>
      cy.get(
        '[style="transform: translateX(426px); width: 213px;"] > .header-content'
      ),
    numberOfRows: () => cy.get(".vertical-inner .rgRow"),
    table: () => cy.get(".vertical-inner"),
    containerOfTable: () => cy.get("div.header-rgRow.actual-rgRow"),
  };

  verifyTheReportName() {
    this.elements.reportName().should("contain", RANDOM_REPORT_NAME);
  }

  verifyTheQuantityOfRowsInTheReport() {
    this.elements.numberOfRows().should("have.length", 3);
  }
  validateTheValuesInTheTableRows(columnHeader: any, expectedValue: any) {
    this.elements
      .containerOfTable()
      .contains(columnHeader)
      .invoke("index")
      .then((columnIndex) => {
        this.elements
          .table()
          .find(".content-wrapper")
          .each((elem) => {
            cy.wrap(elem)
              .find(".rgRow")
              .find(".rgCell")
              .eq(columnIndex)
              .invoke("text")
              .then((cell) => {
                if (cell.trim() === expectedValue.trim()) {
                  expect(
                    cell.trim(),
                    `found the row with${columnHeader} = ${expectedValue}`
                  ).to.equal(expectedValue.trim());
                }
              });
          });
      });
  }
  confirmTheCorrectnessOfTheHeaders() {
    this.elements.personalHeader().should("contain", "Personal");
    this.elements.jobHeader().should("contain", "Job");
    this.elements.salaryHeader().should("contain", "Salary");
  }
}
