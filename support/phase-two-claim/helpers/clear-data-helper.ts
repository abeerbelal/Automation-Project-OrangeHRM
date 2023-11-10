import { URLs } from "./create-event-and-expenses-helper";
import { EventId } from "./create-event-and-expenses-helper";
import { ExpensesId } from "./create-event-and-expenses-helper";
import { user_Id } from "../../generic-helper/employee-helper";
export default class clearDataHelper {
  static clearExpensesRequest() {
    return cy.apiDeleteRequest(URLs.createExpenses, {
      ids: [ExpensesId],
    });
  }
  static clearEventRequest() {
    return cy.apiDeleteRequest(URLs.createEvents, {
      ids: [EventId],
    });
  }
  static deleteUser() {
    return cy.apiDeleteRequest("/web/index.php/api/v2/admin/users", {
      ids: [user_Id],
    });
  }
}
