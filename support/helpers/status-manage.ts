import employeeJobTitleVacancyCandidateInitilizer from "../api/initilaizer/employee-jobTitle-vacancy-candidate-initilizer";
export const URLs = {
  shortListed: (candidteID: number) =>
    `web/index.php/api/v2/recruitment/candidates/${candidteID}/shortlist`,
  scheduleInterview: (candidteID: number) =>
    `/web/index.php/api/v2/recruitment/candidates/${candidteID}/shedule-interview`,
  interViewPasses: (candidteID: number, interviewID: number) =>
    `/web/index.php/api/v2/recruitment/candidates/${candidteID}/interviews/${interviewID}/pass`,
  jobOffer: (candidteID: number) =>
    `/web/index.php/api/v2/recruitment/candidates/${candidteID}/job/offer`,
  hired: (candidteID: number) =>
    `/web/index.php/api/v2/recruitment/candidates/${candidteID}/hire`,
};

export default class statusManagment {
  static ShortListedCandidate(candidteID: number) {
    cy.request({
      method: "PUT",
      url: URLs.shortListed(candidteID),
      body: {
        note: null,
      },
    });
  }
  static sheduleInterviewCandidate(
    employeeNumber: number,
    candidteID: number
  ): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.scheduleInterview(candidteID),
        body: employeeJobTitleVacancyCandidateInitilizer.initscheduleInterview(
          employeeNumber
        ),
      })
      .then((response) => {
        return response.body.data.id;
      });
  }
  static interViewPassesCandidate(candidteID: number, interviewID: number) {
    return cy.apiPutRequest(URLs.interViewPasses(candidteID, interviewID));
  }
  static jobOfferCandidate(candidteID: number) {
    return cy.apiPutRequest(URLs.jobOffer(candidteID));
  }
  static hiredCandidate(candidteID: number) {
    return cy.apiPutRequest(URLs.hired(candidteID));
  }
}
