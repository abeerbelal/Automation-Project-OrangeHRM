import employeeJobTitleVacancyCandidateInitilizer from "../api/initilaizer/employee-jobTitle-vacancy-candidate-initilizer";
export const URLs = {
  jobTilte: `/web/index.php/api/v2/admin/job-titles`,
  employee: `/web/index.php/api/v2/pim/employees`,
  candidates: "web/index.php/api/v2/recruitment/candidates",
  vacancy: "web/index.php/api/v2/recruitment/vacancies",
  shortListed: (candidteID: number) =>
    `web/index.php/api/v2/recruitment/candidates/${candidteID}/shortlist`,
  scheduleInterview: (candidteID: number) =>
    `/web/index.php/api/v2/recruitment/candidates/${candidteID}/shedule-interview`,
};
export let jobTilteId: number;
export let empNumber: number;
export let vacancyId: number;
export let candidteID: number;
export default class JobTitleEmployeeVacancyCandidateHelper {
  static JobTitleRequest(): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.jobTilte,
        body: employeeJobTitleVacancyCandidateInitilizer.initJobTitle(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        jobTilteId = response.body.data.id;
        return response.body.data.id;
      });
  }
  static createEmployeeRequest(
    empID: string,
    firstName: string,
    lastName: string,
    middleName: string
  ) {
    return cy
      .request({
        method: "POST",
        url: URLs.employee,
        body: {
          empPicture: null,
          lastName: lastName,
          employeeId: empID,
          firstName: firstName,
          middleName: middleName,
        },
      })
      .then((response) => {
        empNumber = response.body.data.empNumber;
        return response.body.data.empNumber;
      });
  }
  static AddCandidatesRequest(vacancyId: number): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.candidates,
        body: employeeJobTitleVacancyCandidateInitilizer.initCandidate(
          vacancyId
        ),
      })
      .then((response) => {
        candidteID = response.body.data.id;
        return response.body.data.id;
      });
  }

  static AddVacancyRequest(
    jobTitleId: number,
    employeeNumber: number
  ): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.vacancy,
        body: employeeJobTitleVacancyCandidateInitilizer.initVacancy(
          jobTitleId,
          employeeNumber
        ),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        vacancyId = response.body.data.id;
        return response.body.data.id;
      });
  }
}
