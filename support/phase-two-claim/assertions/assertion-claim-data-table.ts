  export default class claimRequestAssertion {
    element = {
      page:() => cy.visit("/web/index.php/claim/viewAssignClaim"),
      header:() => cy.get(".oxd-table-header"),
      table:() => cy.get('.orangehrm-container')
    }
  
    visitViewAssignClaim(){
      cy.visit("/web/index.php/claim/viewAssignClaim");
    }

getHeaderIndex(headerName:string){
  return this.element.header().children().first().contains("[role=columnheader]", headerName).invoke("index")
}
validateTableRow(rowNumber: number,headerName: string, value: string|number, isExist: boolean) {
  this.getHeaderIndex(headerName).then(headerIndex => {
    this.element.table().find("div[role=row]").eq(rowNumber).find("div[role=cell]").eq(headerIndex).contains(value).should
    (isExist ? "exist" : "not.exist")
  })
}
 
}



