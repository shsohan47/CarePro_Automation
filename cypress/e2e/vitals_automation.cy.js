import LoginPage from "../support/pageObjects/LoginPage";
import FacilityPage from "../support/pageObjects/FacilityPage";
import ClientService from "../support/pageObjects/ClientSearchPage";
import validPaitentInfo from "../support/component/validPatientInfo";
describe("client-search functionality", () => {
  const loginPage = new LoginPage();
  const facility = new FacilityPage();
  const clientServices = new ClientService();

  beforeEach(() => {
    // Define the setup function for cy.session()
    const loginSetup = () => {
      loginPage.login();
      facility.facilityFunction();
      cy.wait(2000);
    };

    // Use cy.session() to cache the login session
    cy.session('login', loginSetup);
  });

//   beforeEach(() => {
//     // Restore the session before each test
//     cy.session('login');
//   });

  context("Group of vital validations testCase", () => {
    it("go to vital functionality", () => {
        cy.visit('/client-search')
      clientServices.nrcClick();
      clientServices.NRCvalueInput("111111111");
      clientServices.search();
      clientServices.clientModalCheck();
      clientServices.attendToPatientClick();
      cy.wait(3000);
    
      clientServices.vitalButtonClick();
    });

    it.only("User data manipulation", () => {
      // Ensure no additional visit call to avoid resetting state
      cy.visit('/client-search')
      clientServices.nrcClick();
      clientServices.NRCvalueInput("111111111");
      clientServices.search();
      clientServices.clientModalCheck();
      clientServices.attendToPatientClick();
      cy.wait(3000);
    
      clientServices.vitalButtonClick();
      
      clientServices.addVital();
      validPaitentInfo();
    });
  });
});
