export default class EmployeeHelperClass {
  static createEmployee(
    empID: string,
    firstName: string,
    middleName: string,
    lastName: string
  ): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: "/web/index.php/api/v2/pim/employees",
        body: {
          empPicture: null,
          employeeId: empID,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
        },
      })
      .then((response) => {
        return response.body.data.empNumber;
      });
  }

  static deleteEmployee(employeeId: number) {
    return cy
      .request({
        method: "DELETE",
        url: "/web/index.php/api/v2/pim/employees",
        body: { ids: [employeeId] },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }
}
