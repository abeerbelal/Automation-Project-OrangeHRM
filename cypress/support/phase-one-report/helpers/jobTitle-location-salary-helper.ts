import JobTitleLocationSalaryInitilizer from "../api/initilaizer/jobTitle-location-empNo-initilaizer";
export let locationId: number;
export let jobTitleId: number;

export const URLs = {
  jobTilte: `/web/index.php/api/v2/admin/job-titles`,
  location: `/web/index.php/api/v2/admin/locations`,
  salary: (empNO: number) =>
    `/web/index.php/api/v2/pim/employees/${empNO}/salary-components`,
  jobDetails: (empNO: number) =>
    `/web/index.php/api/v2/pim/employees/${empNO}/job-details`,
};

export default class JobTitleLocationSalaryHelperClass {
  static JobTitleRequest() {
    return cy
      .request({
        method: "POST",
        url: URLs.jobTilte,
        body: JobTitleLocationSalaryInitilizer.initJobTitle(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        return response.body.data.id;
      });
  }

  static LocationRequest() {
    return cy
      .request({
        method: "POST",
        url: URLs.location,
        body: JobTitleLocationSalaryInitilizer.initLocation(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        locationId = response.body.data.id;
        return response.body.data.id;
      });
  }
  static jobDetailsRequest(
    empNo: number,
    jobTitleId: number,
    locationId: number
  ) {
    return cy
      .request({
        method: "PUT",
        url: URLs.jobDetails(empNo),
        body: JobTitleLocationSalaryInitilizer.initJobDetails(
          jobTitleId,
          locationId
        ),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }
  static salaryRequest(empNo: number) {
    return cy
      .request({
        method: "POST",
        url: URLs.salary(empNo),
        body: JobTitleLocationSalaryInitilizer.initSalary(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }
}
