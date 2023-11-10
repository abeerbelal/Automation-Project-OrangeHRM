import claimRequestCreateEventAddExpensesCreateExpensesInitilaizer from "../api/initilaizer/claimRequest-createEvent-addExpenses-createExpenses-initilaizer";
export const URLs = {
  submitClaim: (claimRequestNumber: number) =>
    `/web/index.php/api/v2/claim/requests/${claimRequestNumber}/action`,
  addExpenses: (claimRequestNumber: number) =>
    `/web/index.php/api/v2/claim/requests/${claimRequestNumber}/expenses`,
  claimRequest: `/web/index.php/api/v2/claim/requests`,
};
export let claimRequestNo:number;

export default class createEventAndExpensesAndCreateRequestHelper {
  static createClaimRequest(eventNumber: number): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.claimRequest,
        body: claimRequestCreateEventAddExpensesCreateExpensesInitilaizer.initClaimRequestPayload(
          eventNumber
        ),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        claimRequestNo = response.body.data.id;
        return response.body.data.id;
      });
  }

  static addExpensesRequest(claimRequestNumber: number, expensesNumber: number) {
    return cy
      .request({
        method: "POST",
        url: URLs.addExpenses(claimRequestNumber),
        body: claimRequestCreateEventAddExpensesCreateExpensesInitilaizer.initAddExpensesPayload(expensesNumber),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }
  static submitClaimRequest(claimRequestNumber: number) {
    return cy
      .request({
        method: "PUT",
        url: URLs.submitClaim(claimRequestNumber),
        body: {
          action: "SUBMIT",
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }
}
