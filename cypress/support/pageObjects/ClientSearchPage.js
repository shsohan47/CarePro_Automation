export default class ClientService {
  // Define selectors for various elements
  selectors = {
    NRC: '.gap-4 > :nth-child(2)',
    NRCvalue: '.custom-input',
    searchButton: '.absolute > .rounded-full',
    clientModal: ':nth-child(2) > .shadow > .gap-5',
    attendToPatient: '.bg-greenColor',
    biometricModal: '.modal-box',
    skipButton: '.second_btn_v2',
    skipReasonModal: '.modal-box',
    generalReason: ':nth-child(1) > .flex > .min-w-[14px]',
    saveButton: '.main_btn',
    vital: 'a > .flex',
    actions: '.gap-1.text-textColor > .gap-1',
    dropdown: '.dropdown-content',
    addVital: '.gap-4 > .flex'
  }

  // Click NRC button
  nrcClick() {
    return cy.get(this.selectors.NRC).click();
  }

  // Input NRC value
  NRCvalueInput(value) {
    return cy.get(this.selectors.NRCvalue).type(value);
  }

  // Click search button
  search() {
    return cy.get(this.selectors.searchButton).click();
  }

  // Check if client modal exists
  clientModalCheck() {
    return cy.get(this.selectors.clientModal).should('exist');
  }

  // Click 'Attend to Patient' button
  attendToPatientClick() {
    return cy.get(this.selectors.attendToPatient).click();
  }

  // Validate biometric modal and click skip button
  biometricValidation() {
    return cy.get(this.selectors.biometricModal).should("exist").within(() => {
      cy.get(this.selectors.skipButton).click();
    });
  }

  // Skip biometric validation by selecting a reason and clicking save button
  skipBiometricValidation() {
    return cy.get(this.selectors.skipReasonModal).should("exist").within(() => {
      cy.get(this.selectors.generalReason).click();
      cy.get(this.selectors.saveButton).click();
    });
  }

  // Click vital button
  vitalButtonClick() {
    return cy.get(this.selectors.vital).click();
  }

  // Perform actions by clicking and selecting from dropdown
  action() {
    cy.get(this.selectors.actions).click();
    cy.get(this.selectors.dropdown).eq(2).within(() => {
      cy.contains("Edit Profile").click();
    });
  }

  // Click add vital button
  addVital() {
    return cy.get(this.selectors.addVital).click();
  }
}
