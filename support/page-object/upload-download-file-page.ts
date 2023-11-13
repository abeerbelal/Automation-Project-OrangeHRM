import { candidteID } from "../helpers/create-employee-jobTitle-vacancy-helper";
export default class uploadDownloadFilePeage {
  elements = {
    Editswitch: () => cy.get(".oxd-switch-input"),
    uploadFile: () => cy.get("input[type=file]"),
    saveButton: () => cy.get(`.oxd-form-actions > .oxd-button`),
    download: () => cy.get(".orangehrm-file-preview"),
  };

  uploadTxtFile(fileName: string) {
    cy.intercept(`/web/index.php/recruitment/addCandidate/${candidteID}`);
    this.elements.Editswitch().click({ force: true });
    this.elements.uploadFile().selectFile(`cypress/fixtures/${fileName}.txt`, {
      force: true,
    });
    this.elements.saveButton().click({ force: true });
  }
  downloadFile() {
    cy.intercept(`/web/index.php/recruitment/addCandidate/${candidteID}`);
    this.elements.download().click({ force: true });
  }

  verifyFileContent(fileName: string) {
    cy.readFile(`cypress/downloads/${fileName}.txt`).then((actualContent) => {
      cy.fixture(`${fileName}.txt`).then((expectedContent) => {
        cy.wrap(actualContent).should("deep.equal", expectedContent);
      });
    });
  }
}
