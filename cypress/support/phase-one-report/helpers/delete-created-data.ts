import { locationId } from "./jobTitle-location-salary-helper";
import { jobTitleId } from "./jobTitle-location-salary-helper";
import { empNoArray } from "./employee-data-processor";
import EmployeeHelperClass from "./employee-helper";
export const URLs = {
  jobTilte: `/web/index.php/api/v2/admin/job-titles`,
  location: `/web/index.php/api/v2/admin/locations`,
  employee: "/web/index.php/api/v2/pim/employees",
};

export default class JobTitleLocationEmployeesDeleteHelper {
  static JobTitleDeleteRequest() {
    return cy
      .request({
        method: "DELETE",
        url: URLs.jobTilte,
        body: { ids: [jobTitleId] },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }

  static LocationDeleteRequest() {
    return cy
      .request({
        method: "DELETE",
        url: URLs.location,
        body: { ids: [locationId] },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }

  static DeleteEmployee() {
    for (let i = 0; i < 3; i++) {
      const empID = empNoArray[i];
      EmployeeHelperClass.deleteEmployee(empID);
    }
  }
}
