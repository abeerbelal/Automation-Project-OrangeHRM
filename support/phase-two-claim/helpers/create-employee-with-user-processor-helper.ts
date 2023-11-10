import EmployeeHelperClass from "../../generic-helper/employee-helper";
export default class EmployeeDataProcessorPhaseTwo {
  static processEmployeeData() {
    cy.fixture("phase-two-claim/employeeinfo.json").then((infoData) => {
      EmployeeHelperClass.createEmployee(
        infoData.EmpID,
        infoData.firstName,
        infoData.lastName,
        infoData.middelName
      ).then((empId) => {
        EmployeeHelperClass.createUser(empId, "ESS");
      });
    });
  }
}
