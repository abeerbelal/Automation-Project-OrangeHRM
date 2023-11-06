import JobTitleLocationSalaryHelperClass from "./jobTitle-location-salary-helper";
import EmployeeHelperClass from "./employee-helper";
let empNoArray: any = [];
export default class EmployeeDataProcessor {
  static processEmployeeData() {
    cy.fixture("phase-one-report/employeeinfo.json").then((data) => {
      JobTitleLocationSalaryHelperClass.LocationRequest().then((locationId) => {
        JobTitleLocationSalaryHelperClass.JobTitleRequest().then(
          (jobTilteId) => {
            for (let i = 1; i <= 3; i++) {
              const empID = data[`empID${i}`];
              const firstName = data[`firstName${i}`];
              const middleName = data[`middleName${i}`];
              const lastName = data[`lastName${i}`];

              EmployeeHelperClass.createEmployee(
                empID,
                firstName,
                middleName,
                lastName
              ).then((empNo) => {
                empNoArray.push(empNo);
                JobTitleLocationSalaryHelperClass.jobDetailsRequest(
                  empNo,
                  jobTilteId,
                  locationId
                );
                JobTitleLocationSalaryHelperClass.salaryRequest(empNo);
              });
            }
          }
        );
      });
    });
  }
}
export { empNoArray };
