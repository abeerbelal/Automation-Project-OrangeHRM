import Generic from "../../generic-helper/generic-helper";
import { RANDOM_JOB_TITLE } from "./../api/initilaizer/jobTitle-location-empNo-initilaizer";
import { RANDOM_LOCATION } from "./../api/initilaizer/jobTitle-location-empNo-initilaizer";
export const RANDOM_REPORT_NAME: string = Generic.getRandomString("testReport");
export default class ReportPage {
  elements = {
    reportTitle: () => cy.get(":nth-child(2) > .oxd-input"),
    selectionCriteria: () =>
      cy.get(
        ":nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    criteriaPlusButton: () =>
      cy.get(
        ":nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button > .oxd-icon"
      ),
    selectDisplayFieldGroup: () =>
      cy.get(
        ":nth-child(5) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    selectDisplayField: () =>
      cy.get(
        ":nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    fieldPlusButton: () =>
      cy.get(
        ":nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button > .oxd-icon"
      ),
    saveReportButton: () => cy.get(".oxd-button--secondary"),
    jobTitle: () => cy.get(":nth-child(8) > span"),
    location: () => cy.get(":nth-child(13) > span"),
    personal: () => cy.get(".oxd-select-dropdown > :nth-child(2)"),
    job: () => cy.get(":nth-child(7) > span"),
    salary: () => cy.get(":nth-child(8) > span"),
    firstName: () => cy.get(":nth-child(4) > span"),
    jobTitleForGroup: () => cy.get(":nth-child(4) > span"),
    amount: () => cy.get(".oxd-select-dropdown > :nth-child(4)"),
    personalHader: () =>
      cy.get(":nth-child(5) > .oxd-switch-wrapper > label > .oxd-switch-input"),
    jobHeader: () =>
      cy.get(":nth-child(8) > .oxd-switch-wrapper > label > .oxd-switch-input"),
    salaryHeader: () =>
      cy.get(
        ":nth-child(11) > .oxd-switch-wrapper > label > .oxd-switch-input"
      ),
    jobSelect: () =>
      cy.get(
        ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    locationSelect: () =>
      cy.get(
        ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    selectOption: () => cy.get(".oxd-select-option"),
  };

  fillReportFeilds() {
    cy.visit("/web/index.php/pim/definePredefinedReport");
    this.elements.reportTitle().type(`${RANDOM_REPORT_NAME}`);
    //job
    this.elements.selectionCriteria().click();
    this.elements.jobTitle().click();
    this.elements.criteriaPlusButton().click();
    this.elements.jobSelect().click();
    this.elements
      .selectOption()
      .filter(`:contains(${RANDOM_JOB_TITLE})`)
      .eq(0)
      .click();
    //location
    this.elements.selectionCriteria().click();
    this.elements.location().click();
    this.elements.criteriaPlusButton().click();
    this.elements.locationSelect().click();
    this.elements
      .selectOption()
      .filter(`:contains(${RANDOM_LOCATION})`)
      .eq(0)
      .click();
    //personal
    this.elements.selectDisplayFieldGroup().click();
    this.elements.personal().click();
    this.elements.selectDisplayField().click();
    this.elements.firstName().click();
    this.elements.fieldPlusButton().click();
    //job
    this.elements.selectDisplayFieldGroup().click();
    this.elements.job().click();
    this.elements.selectDisplayField().click();
    this.elements.jobTitleForGroup().click();
    this.elements.fieldPlusButton().click();
    //salary
    this.elements.selectDisplayFieldGroup().click();
    this.elements.salary().click();
    this.elements.selectDisplayField().click();
    this.elements.amount().click();
    this.elements.fieldPlusButton().click();
    //headers
    this.elements.personalHader().click();
    this.elements.jobHeader().click();
    this.elements.salaryHeader().click();
    //save
    this.elements.saveReportButton().click();
  }
}
