import LoginPage from "../support/pageObjects/LoginPage";
import FacilityPage from "../support/pageObjects/FacilityPage";

describe("Facility test cases", () => {
  const loginPage = new LoginPage();
  const facility = new FacilityPage();

  beforeEach(() => {
    // Log in before each test
    loginPage.login();
  });

  it("Redirect URL is correct & invalid facility select test", () => {
    // Check if URL is correct after login
    cy.url().should("equal", "https://carepro-training.ihmafrica.com/select-facility");
    // Attempt to submit without selecting a facility and validate error message
    facility.clickButton();
    facility.errorValidation("Required!");
  });

  it("Valid facility selection", () => {
    // Select province, district, and facility with valid inputs
    facility.selectProvince("Lusaka");
    facility.selectDistrict("Lusaka");
    facility.selectFacility("Dr. Watson Dental Clinic", { delay: 100 });
    cy.wait(2000); // Wait for 2 seconds to ensure the selection is processed
    facility.clickFacility();
    // Confirm selection by clicking additional button
    cy.get(".absolute > .border").click();
    facility.clickButton();
  });

  it("Logout functionality", () => {
    // Test logout functionality
    facility.logout();
    // Verify URL after logout
    cy.url().should("equal", "https://carepro-training.ihmafrica.com/");
  });

  it("Send facility request functionality", () => {
    // Test sending facility request
    cy.get(facility.selectors.sendFacilityRequest).click();
    // Verify URL after sending request
    cy.url().should("equal", "https://carepro-training.ihmafrica.com/request-facility");
  });
});
