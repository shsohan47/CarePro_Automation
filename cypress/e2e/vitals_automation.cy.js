import LoginPage from "../support/pageObjects/LoginPage";
import FacilityPage from "../support/pageObjects/FacilityPage";
import ClientService from "../support/pageObjects/ClientSearchPage";
import validPaitentInfo from "../support/component/validPatientInfo";
import PatientInfo from "../support/pageObjects/PatientInfoPage";
import clearBMIField from "../support/component/clearBMIField";

describe("client-search functionality", () => {
  // Instantiate page objects
  const loginPage = new LoginPage();
  const facility = new FacilityPage();
  const clientServices = new ClientService();
  const info = new PatientInfo()

  beforeEach(() => {
    // Define the setup function for cy.session()
    const loginSetup = () => {
      loginPage.login(); // Log in to the application
      facility.facilityFunction(); // Perform facility-related actions
      clientServices.nrcClick(); // Click NRC
      clientServices.NRCvalueInput("111111111"); // Input NRC value
      clientServices.search(); // Perform search
      clientServices.clientModalCheck(); // Check client modal
      clientServices.attendToPatientClick(); // Click to attend to patient
      cy.wait(3000); // Wait for 3 seconds

      clientServices.vitalButtonClick(); // Click vital button
      cy.wait(2000); // Wait for 2 seconds
    };

    // Use cy.session() to cache the login session
    cy.session("login", loginSetup);
  });

  // Commented out redundant session restore code
  // beforeEach(() => {
  //   // Restore the session before each test
  //   cy.session('login');
  // });

  context("Group of vital validation testCases", () => {
    it("go to vital functionality", () => {
      cy.visit("/client-search"); // Visit client search page
      clientServices.nrcClick(); // Click NRC
      clientServices.NRCvalueInput("111111111"); // Input NRC value
      clientServices.search(); // Perform search
      clientServices.clientModalCheck(); // Check client modal
      clientServices.attendToPatientClick(); // Click to attend to patient
      cy.wait(3000); // Wait for 3 seconds

      clientServices.vitalButtonClick(); // Click vital button
    });

    it("User data manipulation", () => {
      cy.visit("/vitals"); // Visit vitals page
      clientServices.addVital(); // Add vital information
      validPaitentInfo(); // Input valid patient information
    });

    it("patient BMI validation & Boundary Value testing", () => {
      cy.visit('/vitals'); // Visit vitals page
      cy.wait(5000); // Wait for 5 seconds
      clientServices.addVital(); // Add vital information
      // BMI validation
      clearBMIField(); // Clear BMI field
      // Lowest BMI
      info.weightPick("50"); // Input weight
      info.heightPick("180"); // Input height
      info.bmiMsg("(between -3 SD and -2 SD)"); // Verify BMI message
      // Normal BMI
      clearBMIField(); // Clear BMI field
      info.weightPick("71"); // Input weight
      info.heightPick("176.4"); // Input height
      info.bmiMsg("(Normal 18.5-24.9kg/m2)"); // Verify BMI message
      // High BMI
      clearBMIField(); // Clear BMI field
      info.weightPick("170"); // Input weight
      info.heightPick("180"); // Input height
      info.bmiMsg("(Very severely obese BMI >40kg/m2)"); // Verify BMI message
      // Invalid input
      clearBMIField(); // Clear BMI field
      info.weightPick("170"); // Input weight
      info.heightPick("1801"); // Input height (invalid)
      info.bmiMsg("(between -3 SD and -2 SD)"); // Verify BMI message
    });

    it("Temperature Validation & Boundary Value testing", () => {
      cy.visit('/vitals'); // Visit vitals page
      cy.wait(5000); // Wait for 5 seconds
      clientServices.addVital(); // Add vital information
      // Below Normal temperature
      cy.get(info.selectors.temp).clear(); // Clear temperature field
      info.tempPick('10'); // Input temperature
      cy.get('.grid > :nth-child(5)').should("contain.text", "Below normal <36.6°C"); // Verify message
      // Normal temperature
      cy.get(info.selectors.temp).clear(); // Clear temperature field
      info.tempPick('36.8'); // Input temperature
      cy.get('.grid > :nth-child(5)').should("contain.text", "Normal temperature 36.6-37°C"); // Verify message
      // Above Normal temperature
      cy.get(info.selectors.temp).clear(); // Clear temperature field
      info.tempPick('123'); // Input temperature
      cy.get('.grid > :nth-child(5)').should("contain.text", "Above normal >37°C"); // Verify message
    });

    it("BP validation and Boundary Value testing", () => {
      cy.visit('/vitals'); // Visit vitals page
      cy.wait(5000); // Wait for 5 seconds
      clientServices.addVital(); // Add vital information
      // Unrecordable BP should disable input
      info.systolicPick("91"); // Input systolic BP
      info.diastolicPick('61'); // Input diastolic BP
      cy.get(info.selectors.bp).should('be.disabled'); // Verify BP field is disabled
      // Sys & Dia should disable
      cy.get(info.selectors.systolic).clear(); // Clear systolic field
      cy.get(info.selectors.diastolic).clear(); // Clear diastolic field
      info.bpPick("Too High"); // Input BP status
      cy.get(info.selectors.systolic).should("be.disabled"); // Verify systolic field is disabled
      cy.get(info.selectors.diastolic).should("be.disabled"); // Verify diastolic field is disabled
      // Boundary value testing
      info.bpPick("--Select--"); // Reset BP status
      // Below normal BP
      info.systolicPick("10"); // Input systolic BP
      cy.get('.grid > :nth-child(6)').should('contain.text', 'Below normal Systolic BP <90 mmHg'); // Verify message
      info.diastolicPick('12'); // Input diastolic BP
      cy.get('.grid > :nth-child(7)').should('contain.text', 'Below normal Diastolic BP <60 mmHg'); // Verify message
      cy.get(info.selectors.systolic).clear(); // Clear systolic field
      cy.get(info.selectors.diastolic).clear(); // Clear diastolic field
      // Normal BP
      info.systolicPick("90"); // Input systolic BP
      cy.get('.grid > :nth-child(6)').should('contain.text', 'Normal Systolic BP 90-140 mmHg'); // Verify message
      info.diastolicPick('60'); // Input diastolic BP
      cy.get('.grid > :nth-child(7)').should('contain.text', 'Normal Diastolic BP 60-90 mmHg'); // Verify message
      cy.get(info.selectors.systolic).clear(); // Clear systolic field
      cy.get(info.selectors.diastolic).clear(); // Clear diastolic field
      // Above normal BP
      info.systolicPick("902"); // Input systolic BP
      cy.get('.grid > :nth-child(6)').should('contain.text', 'systolic>180 mmHg seek emergency care'); // Verify message
      info.diastolicPick('602'); // Input diastolic BP
      cy.get('.grid > :nth-child(7)').should('contain.text', 'Diastolic BP>120 mmHg seek emergency care'); // Verify message
      cy.get(info.selectors.systolic).clear(); // Clear systolic field
      cy.get(info.selectors.diastolic).clear(); // Clear diastolic field
    });

    it("Others field validations", () => {
      cy.visit('/vitals'); // Visit vitals page
      cy.wait(5000); // Wait for 5 seconds
      clientServices.addVital(); // Add vital information
      // Below normal values
      info.pulsePick("10"); // Input pulse rate
      info.RespiratoryPick('10'); // Input respiratory rate
      info.oxygenPick('20'); // Input oxygen saturation
      cy.get('.grid > :nth-child(9)').should("contain.text", 'Low Pulse rate <60 b/m'); // Verify pulse rate message
      cy.get('.grid > :nth-child(10)').should("contain.text", 'Low Respiratory rate <12 b/m'); // Verify respiratory rate message
      cy.get('.grid > :nth-child(11)').should("contain.text", 'Below normal oxygen saturation <95%'); // Verify oxygen saturation message
      cy.get(info.selectors.pulseRate).clear(); // Clear pulse rate field
      cy.get(info.selectors.respiratoryRate).clear(); // Clear respiratory rate field
      cy.get(info.selectors.oxygen).clear(); // Clear oxygen saturation field
      // Normal values
      info.pulsePick("60"); // Input pulse rate
      info.RespiratoryPick('12'); // Input respiratory rate
      info.oxygenPick('96'); // Input oxygen saturation
      cy.get('.grid > :nth-child(9)').should("contain.text",'Normal Pulse rate 60-100b/m')
      cy.get('.grid > :nth-child(10)').should("contain.text",'Normal Respiratory rate 12-20b/m')
      cy.get('.grid > :nth-child(11)').should("contain.text",'Normal oxygen saturation 95-100%')
    })
    })
  })