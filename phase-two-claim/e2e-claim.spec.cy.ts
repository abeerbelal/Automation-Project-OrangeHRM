import LoginPage from "../../support/log-in/page-object/log-in";
import LogOutPage from "../../support/log-out/page-object/log-out";
import preRequesitsClass from "../../support/phase-two-claim/helpers/execute-event-expenses-claimRequest-helper";
import EmployeeDataProcessorPhaseTwo from "../../support/phase-two-claim/helpers/create-employee-with-user-processor-helper";
import controlClaimRequestPage from "../../support/phase-two-claim/page-object/control-claim-request-page";
import claimRequestAssertion from "../../support/phase-two-claim/assertions/assertion-claim-data-table";
import clearDataHelper from "../../support/phase-two-claim/helpers/clear-data-helper";
import dayjs from "dayjs";
const LOG_IN: LoginPage = new LoginPage();
const LOG_OUT: LogOutPage = new LogOutPage();
const CURRENT_DATE = dayjs().format("YYYY-MM-DD");

const CLAIM: controlClaimRequestPage = new controlClaimRequestPage();
const ASSERTION: claimRequestAssertion = new claimRequestAssertion();
describe("Generate an Employee Claim", () => {
  beforeEach(function () {
    cy.visitAndLogin(LOG_IN, "Admin", "admin123");
    EmployeeDataProcessorPhaseTwo.processEmployeeData();
    preRequesitsClass.preRequesitsfunction();
  });

  it("Aprrove an Employee claim", () => {
    LOG_OUT.logOut();
    LOG_IN.logIn("admin", "admin123");
    CLAIM.claimApprove();
    ASSERTION.visitViewAssignClaim();
    ASSERTION.validateTableRow(1, "Status", "Paid", true);
    ASSERTION.validateTableRow(1, "Amount", "9,000.00", true);
    ASSERTION.validateTableRow(1, "Submitted Date", CURRENT_DATE, true);
  });
  //Reject case
  it("Reject an Employee claim", () => {
    LOG_OUT.logOut();
    LOG_IN.logIn("admin", "admin123");
    CLAIM.claimReject();
    ASSERTION.visitViewAssignClaim();
    ASSERTION.validateTableRow(1, "Status", "Rejected", true);
    ASSERTION.validateTableRow(1, "Amount", "9,000.00", true);
    ASSERTION.validateTableRow(1, "Submitted Date", CURRENT_DATE, true);
  });
  afterEach(function () {
    clearDataHelper.deleteUser();
    clearDataHelper.clearEventRequest();
    clearDataHelper.clearExpensesRequest();
  });
});
