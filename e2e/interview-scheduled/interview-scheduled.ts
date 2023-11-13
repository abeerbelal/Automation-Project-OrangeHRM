import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/log-in/page-object/log-in";
import JobTitleEmployeeVacancyCandidateHelper from "../../support/helpers/create-employee-jobTitle-vacancy-helper";
import { empNumber } from "../../support/helpers/create-employee-jobTitle-vacancy-helper";
import { vacancyId } from "../../support/helpers/create-employee-jobTitle-vacancy-helper";
import passesFailedStatus from "../../support/page-object/passes-failes-status-page";
import statusAssertion from "../../support/status-assertion/status-assertion";
import clearDataHelper from "../../support/helpers/clear-data-helper";
import statusManagment from "../../support/helpers/status-manage";
const LOG_IN: LoginPage = new LoginPage();
const STATUS: passesFailedStatus = new passesFailedStatus();
const STATUS_ASSERTION: statusAssertion = new statusAssertion();
Given("Admin is logged in", () => {
  cy.visitAndLogin(LOG_IN, "Admin", "admin123");
});

Given("Theres an existing Employee", () => {
  cy.fixture("employeeInformation.json").then((data) => {
    JobTitleEmployeeVacancyCandidateHelper.createEmployeeRequest(
      data.EmpID,
      data.firstName,
      data.lastName,
      data.middleName
    );
  });
});
Given("Job Title has a Vacancy", () => {
  JobTitleEmployeeVacancyCandidateHelper.JobTitleRequest().then(
    (jobTilteId) => {
      JobTitleEmployeeVacancyCandidateHelper.AddVacancyRequest(
        jobTilteId,
        empNumber
      );
    }
  );
});

Given('Candidate with status "Interview Scheduled" exists', () => {
  JobTitleEmployeeVacancyCandidateHelper.AddCandidatesRequest(vacancyId).then(
    (candidteID) => {
      statusManagment.ShortListedCandidate(candidteID);
      statusManagment.sheduleInterviewCandidate(empNumber, candidteID);
    }
  );
});

// Scenario 1 steps
When('Admin changes the candidate status to "Interview Passed"', () => {
  STATUS.passesINterview();
});

Then(
  "Candidate status should be updated to {string}",
  (expectedStatus: string) => {
    STATUS_ASSERTION.verifyPassedInterviewStatus(expectedStatus);
  }
);

// Scenario 2 steps (similar to Scenario 1)
When('Admin changes the candidate status to "Interview Failed"', () => {
  STATUS.failsInterview();
});

Then(
  "Candidate status should be updated {string}",
  (expectedStatus: string) => {
    STATUS_ASSERTION.verifyFailedInterviewStatus(expectedStatus);
  }
);

afterEach(() => {
  clearDataHelper.clearJobTitleRequest();
  clearDataHelper.clearVacancyRequest();
  clearDataHelper.clearCandidatesRequest();
});
