import { JobTiltePayload } from "../payloads/jobTitle-payload";
import { VacancyPayload } from "../payloads/vacancy-Payload";
import { CandidatePayload } from "../payloads/candidate-payload";
import { ScheduleInterviewPayload } from "./../payloads/schedule-interview-payload";
import Generic from "../../generic-helpers/random-strings-helper";

export const RANDOM_JOB_TITLE: string = Generic.getRandomString("Doctor");

export default class employeeJobTitleVacancyCandidateInitilizer {
  static initJobTitle(): JobTiltePayload {
    let INIT_JOBTITLE_PAYLOAD: JobTiltePayload = {
      description: "",
      note: "",
      specification: null,
      title: RANDOM_JOB_TITLE,
    };
    return INIT_JOBTITLE_PAYLOAD;
  }
  static initVacancy(
    jobTitleId: number,
    employeeNumber: number
  ): VacancyPayload {
    let INIT_VACANCY_PAYLOAD: VacancyPayload = {
      name: "abeer's Vacancy",
      jobTitleId: jobTitleId,
      employeeId: employeeNumber,
      numOfPositions: null,
      description: "",
      status: true,
      isPublished: true,
    };
    return INIT_VACANCY_PAYLOAD;
  }
  static initCandidate(vacancyId: number): CandidatePayload {
    let INIT_CANDIDATE_PAYLOAD: CandidatePayload = {
      firstName: "abeer",
      lastName: "hanaysheh",
      middleName: "belal",
      email: "abeer@gmail.com",
      comment: "",
      consentToKeepData: false,
      contactNumber: "",
      dateOfApplication: "2023-11-25",
      keywords: "",
      vacancyId: vacancyId,
    };
    return INIT_CANDIDATE_PAYLOAD;
  }
  static initscheduleInterview(
    employeeNumber: number
  ): ScheduleInterviewPayload {
    let INIT_SCHEDUAL_INTERVIEW_PAYLOAD: ScheduleInterviewPayload = {
      interviewName: "first interview",
      interviewDate: "2023-11-29",
      interviewTime: null,
      note: null,
      interviewerEmpNumbers: [employeeNumber],
    };
    return INIT_SCHEDUAL_INTERVIEW_PAYLOAD;
  }
}
