import { CreateEventPayload } from "../payloads/create-event-payload";
import { AddExpensesPayload } from "../payloads/add-expenses-payload";
import { ClaimRequestPayload } from "../payloads/claim-request-payload";
import { CreateExpensesPayload } from "../payloads/create-expenses-payoad";
import Generic from "../../../generic-helper/random-strings-helper";
export const RANDOM_EVENT_NAME: string = Generic.getRandomString("event");
export const RANDOM_EXPENSES_NAME: string = Generic.getRandomString("expenses");

export default class claimRequestCreateEventAddExpensesCreateExpensesInitilaizer {
  static initCreateExpensesPayload(): CreateExpensesPayload {
    let INIT_CREATE_EXPENSES_PAYLOAD: CreateExpensesPayload = {
      name: RANDOM_EXPENSES_NAME,
      description: "expenses description",
      status: true,
    };
    return INIT_CREATE_EXPENSES_PAYLOAD;
  }
  static initClaimRequestPayload(claimEventId: number): ClaimRequestPayload {
    let INIT_CLAIM_REQUEST_PAYLOAD: ClaimRequestPayload = {
      claimEventId: claimEventId,
      currencyId: "XAF",
      remarks: null,
    };
    return INIT_CLAIM_REQUEST_PAYLOAD;
  }
  static initAddExpensesPayload(expensesNumber: number): AddExpensesPayload {
    let INIT_ADD_EXPENSES_PAYLOAD: AddExpensesPayload = {
      expenseTypeId: expensesNumber,
      date: "2023-11-7",
      amount: "9000.00",
      note: null,
    };
    return INIT_ADD_EXPENSES_PAYLOAD;
  }
  static initCreateEventPayload(): CreateEventPayload {
    let INIT_ADD_EVENT_PAYLOAD: CreateEventPayload = {
      name: RANDOM_EVENT_NAME,
      description: "event description",
      status: true,
    };
    return INIT_ADD_EVENT_PAYLOAD;
  }
}
