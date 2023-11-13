import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/log-in/page-object/log-in";
import JobTitleEmployeeVacancyCandidateHelper from "../../support/helpers/create-employee-jobTitle-vacancy-helper";
import { empNumber } from "../../support/helpers/create-employee-jobTitle-vacancy-helper";
import { vacancyId } from "../../support/helpers/create-employee-jobTitle-vacancy-helper";
import clearDataHelper from "../../support/helpers/clear-data-helper";
import statusManagment from "../../support/helpers/status-manage";
import uploadDownloadFilePeage from "../../support/page-object/upload-download-file-page";
const FILE_OPERATIONS: uploadDownloadFilePeage = new uploadDownloadFilePeage();
const LOG_IN: LoginPage = new LoginPage();

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

Given('Candidate with status "Application Initiated" exists', () => {
  JobTitleEmployeeVacancyCandidateHelper.AddCandidatesRequest(vacancyId);
});
Given('Candidate with status "Hired" exists', () => {
  JobTitleEmployeeVacancyCandidateHelper.AddCandidatesRequest(vacancyId).then(
    (candidteID) => {
      statusManagment.ShortListedCandidate(candidteID);
      statusManagment
        .sheduleInterviewCandidate(empNumber, candidteID)
        .then((interviewID) => {
          statusManagment.interViewPassesCandidate(candidteID, interviewID);
          statusManagment.jobOfferCandidate(candidteID);
          statusManagment.hiredCandidate(candidteID);
        });
    }
  );
});

When(
  "Admin open the edit mode and upload a txt file for resume section then download it",
  () => {
    FILE_OPERATIONS.uploadTxtFile("abeer");
    cy.wait(4000);
    FILE_OPERATIONS.downloadFile();
  }
);

Then("The uploaded file should contain the same data as was uploaded", () => {
  FILE_OPERATIONS.verifyFileContent("abeer");
});

afterEach(() => {
  clearDataHelper.clearJobTitleRequest();
  clearDataHelper.clearVacancyRequest();
  clearDataHelper.clearCandidatesRequest();
});
