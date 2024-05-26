export default class FacilityPage {
  // Define selectors for various elements
  selectors = {
    province: ':nth-child(1) > .custom-input',
    district: '.gap-3 > :nth-child(2) > .custom-input',
    facility: '.rounded-md > .custom-input',
    enterButton: '.button',
    sendFacilityRequest: '.text-ashColor',
    errorMessage: ':nth-child(1) > .input_error'
  }

  // Select province from dropdown
  selectProvince(name) {
    return cy.get(this.selectors.province).select(name);
  }

  // Select district from dropdown
  selectDistrict(name) {
    return cy.get(this.selectors.district).select(name);
  }

  // Click facility input
  clickFacility() {
    return cy.get(this.selectors.facility).click();
  }

  // Type facility name into input
  selectFacility(name) {
    return cy.get(this.selectors.facility).type(name);
  }

  // Logout by clicking the logout button
  logout() {
    cy.get(".mt-4").eq(1).within(() => {
      cy.contains("Logout")
        .scrollIntoView() // Ensure the element is visible
        .should('be.visible') // Verify the element is visible
        .click({ force: true }); // Force click if necessary
    });
  }

  // Click the enter button
  clickButton() {
    return cy.get(this.selectors.enterButton).click();
  }

  // Validate error message text
  errorValidation(text) {
    return cy.get('.gap-3').within(() => {
      cy.get(this.selectors.errorMessage)
        .scrollIntoView()
        .should("contain.text", text);
    });
  }

  // Perform facility selection with predefined values
  facilityFunction() {
    // Select province, district, and facility with valid inputs
  this.selectProvince("Lusaka");
  this.selectDistrict("Lusaka");
  this.selectFacility("Dr. Watson Denta", { delay: 200 });
  //`cy.wait(2000); // Wait for 2 seconds to ensure the selection is processed
  cy.get('.absolute > :nth-child(3)').click()
  // Confirm selection by clicking additional button
  this.clickButton();
  }
}
