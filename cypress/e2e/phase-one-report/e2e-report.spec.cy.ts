import LoginPage from "../../support/log-in/page-object/log-in";
import ReportPage from "../../support/phase-one-report/page-object/define-predefined-report-page";
import EmployeeDataProcessor from "../../support/phase-one-report/helpers/employee-data-processor";
import AssertionREportData from "../../support/phase-one-report/assertions/assertins-report-data";
import JobTitleLocationEmployeesDeleteHelper from "../../support/phase-one-report/helpers/delete-created-data";
import { RANDOM_JOB_TITLE } from "../../support/phase-one-report/api/initilaizer/jobTitle-location-empNo-initilaizer";

const LOG_IN: LoginPage = new LoginPage();
const REPORT_PAGE: ReportPage = new ReportPage();
const ASSERTION_REPORT_DATA: AssertionREportData = new AssertionREportData();

describe("Generate an Employee report with search criteria", () => {
  beforeEach(function () {
    cy.visitAndLogin(LOG_IN, "Admin", "admin123");
    EmployeeDataProcessor.processEmployeeData();
  });

  it("Generate an Employee report", () => {
    REPORT_PAGE.fillReportFeilds();
    ASSERTION_REPORT_DATA.verifyTheReportName();
    ASSERTION_REPORT_DATA.verifyTheQuantityOfRowsInTheReport();
    ASSERTION_REPORT_DATA.confirmTheCorrectnessOfTheHeaders();
    ASSERTION_REPORT_DATA.validateTheValuesInTheTableRows(
      "Employee First Name",
      "abeer1"
    );
    ASSERTION_REPORT_DATA.validateTheValuesInTheTableRows(
      "Job Title",
      RANDOM_JOB_TITLE
    );
    ASSERTION_REPORT_DATA.validateTheValuesInTheTableRows("Amount", "2000");
  });
  afterEach(function () {
    JobTitleLocationEmployeesDeleteHelper.JobTitleDeleteRequest();
    JobTitleLocationEmployeesDeleteHelper.LocationDeleteRequest();
    JobTitleLocationEmployeesDeleteHelper.DeleteEmployee();
  });
});
