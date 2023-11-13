import { URLs } from "./create-employee-jobTitle-vacancy-helper";
import { jobTilteId } from "./create-employee-jobTitle-vacancy-helper";
import { candidteID } from "./create-employee-jobTitle-vacancy-helper";
import { vacancyId } from "./create-employee-jobTitle-vacancy-helper";

export default class clearDataHelper {
  static clearJobTitleRequest() {
    return cy.apiDeleteRequest(URLs.jobTilte, {
      ids: [jobTilteId],
    });
  }

  static clearCandidatesRequest() {
    return cy.apiDeleteRequest(URLs.candidates, {
      ids: [candidteID],
    });
  }
  static clearVacancyRequest() {
    return cy.apiDeleteRequest(URLs.candidates, {
      ids: [vacancyId],
    });
  }
}
