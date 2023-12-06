class LogOutPage {
  elements = {
    dropDownMenue: () => cy.get(".oxd-userdropdown-tab > .oxd-icon"),
    LogOutBtn: () => cy.get(":nth-child(4) > .oxd-userdropdown-link"),
  };
  logOut() {
    this.elements.dropDownMenue().click();
    this.elements.LogOutBtn().click();
  }
}
export default LogOutPage;
