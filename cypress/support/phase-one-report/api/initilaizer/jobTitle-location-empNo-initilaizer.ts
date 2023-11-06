import { JobTiltePayload } from "../payloads/jobTitle-payload";
import { LocationPayload } from "../payloads/location-payload";
import { SalaryPayload } from "../payloads/salary-payload";
import { JobDetailsPayload } from "../payloads/job-details-payload";
import Generic from "../../../generic-helper/generic-helper";
export const RANDOM_JOB_TITLE: string = Generic.getRandomString("enginner");
export const RANDOM_LOCATION: string = Generic.getRandomString("Jenin");

export default class JobTitleLocationSalaryInitilizer {
  static initJobTitle(): JobTiltePayload {
    let INIT_JOBTITLE_PAYLOAD: JobTiltePayload = {
      description: "",
      note: "",
      specification: null,
      title: RANDOM_JOB_TITLE,
    };
    return INIT_JOBTITLE_PAYLOAD;
  }

  static initLocation(): LocationPayload {
    let INIT_LOCATION_PAYLOAD: LocationPayload = {
      name: RANDOM_LOCATION,
      countryCode: "ps",
      province: "",
      city: "",
      address: "",
      zipCode: "",
      phone: "",
      fax: "",
      note: "",
    };
    return INIT_LOCATION_PAYLOAD;
  }
  static initJobDetails(
    jobTitleId: number,
    locationId: number
  ): JobDetailsPayload {
    let INIT_JOBDETAILS_PAYLOAD: JobDetailsPayload = {
      joinedDate: null,
      jobTitleId: jobTitleId,
      locationId: locationId,
    };
    return INIT_JOBDETAILS_PAYLOAD;
  }
  static initSalary(): SalaryPayload {
    let INIT_SALARY_PAYLOAD: SalaryPayload = {
      salaryComponent: "test",
      salaryAmount: "2000",
      currencyId: "DZD",
      comment: null,
      addDirectDeposit: false,
    };
    return INIT_SALARY_PAYLOAD;
  }
}
