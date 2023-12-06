import createEventAndExpensesHelper from "./create-event-and-expenses-helper";
import createEventAndExpensesAndCreateRequestHelper from "./employee-actions-apis-helper";
import LoginPage from "../../log-in/page-object/log-in";
import LogOutPage from "../../log-out/page-object/log-out";
import {
  RandomUserPassword,
  RandomUserName,
} from "../../generic-helper/employee-helper";
const LOG_OUT: LogOutPage = new LogOutPage();
const LOG_IN: LoginPage = new LoginPage();

export default class preRequesitsClass {
  static preRequesitsfunction() {
    createEventAndExpensesHelper.createEventRequest().then((eventNumber) => {
      createEventAndExpensesHelper
        .createExpensesRequest()
        .then((expensesNumber) => {
          LOG_OUT.logOut();
          LOG_IN.logIn(RandomUserName, RandomUserPassword);
          createEventAndExpensesAndCreateRequestHelper
            .createClaimRequest(eventNumber)
            .then((claimRequestNumber) => {
              createEventAndExpensesAndCreateRequestHelper.addExpensesRequest(
                claimRequestNumber,
                expensesNumber
              );
              createEventAndExpensesAndCreateRequestHelper.submitClaimRequest(
                claimRequestNumber
              );
            });
        });
    });
  }
}
