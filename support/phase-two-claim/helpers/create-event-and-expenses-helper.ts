import claimRequestCreateEventAddExpensesCreateExpensesInitilaizer from "../api/initilaizer/claimRequest-createEvent-addExpenses-createExpenses-initilaizer";
export const URLs = {
  createEvents: `/web/index.php/api/v2/claim/events`,
  createExpenses: `/web/index.php/api/v2/claim/expenses/types`,
};
export let ExpensesId:number;
export let EventId:number;
export default class createEventAndExpensesHelper {
  static createEventRequest(): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.createEvents,
        body: claimRequestCreateEventAddExpensesCreateExpensesInitilaizer.initCreateEventPayload(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        EventId = response.body.data.id;
        return response.body.data.id;
      });
  }

  static createExpensesRequest(): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.createExpenses,
        body: claimRequestCreateEventAddExpensesCreateExpensesInitilaizer.initCreateExpensesPayload(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        ExpensesId = response.body.data.id;
        return response.body.data.id;
      });
  }
}
