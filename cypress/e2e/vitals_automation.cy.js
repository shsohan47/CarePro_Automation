import LoginPage from "../support/pageObjects/LoginPage";
import FacilityPage from "../support/pageObjects/FacilityPage";
import ClientService from "../support/pageObjects/ClientSearchPage";
import validPaitentInfo from "../support/component/validPatientInfo";
import PatientInfo from "../support/pageObjects/PatientInfoPage";
import clearBMIField from "../support/component/clearBMIField";

describe("client-search functionality", () => {
  const loginPage = new LoginPage();
  const facility = new FacilityPage();
  const clientServices = new ClientService();
  const info = new PatientInfo()

  beforeEach(() => {
    // Define the setup function for cy.session()
    const loginSetup = () => {
      loginPage.login();
      facility.facilityFunction();
      clientServices.nrcClick();
      clientServices.NRCvalueInput("111111111");
      clientServices.search();
      clientServices.clientModalCheck();
      clientServices.attendToPatientClick();
      cy.wait(3000);

      clientServices.vitalButtonClick();
      cy.wait(2000);
    };

    // Use cy.session() to cache the login session
    cy.session("login", loginSetup);
  });

  //   beforeEach(() => {
  //     // Restore the session before each test
  //     cy.session('login');
  //   });

  context("Group of vital validation testCases", () => {
    it("go to vital functionality", () => {
      cy.visit("/client-search");
      clientServices.nrcClick();
      clientServices.NRCvalueInput("111111111");
      clientServices.search();
      clientServices.clientModalCheck();
      clientServices.attendToPatientClick();
      cy.wait(3000);

      clientServices.vitalButtonClick();
    });

    it("User data manipulation", () => {
      // Ensure no additional visit call to avoid resetting state
      cy.visit("/vitals");
      clientServices.addVital();
      validPaitentInfo();
    });

    it("patient BMI validation & Boundary Value testing",()=>
    {
      cy.visit('/vitals')
      cy.wait(5000)
      clientServices.addVital();
        //BMI validation
        clearBMIField()
        //lowest BMI
        info.weightPick("50")
        info.heightPick("180")
        info.bmiMsg("(between -3 SD and -2 SD)")
        //Normal BMI
        clearBMIField()
        info.weightPick("71");
        info.heightPick("176.4")
        info.bmiMsg("(Normal 18.5-24.9kg/m2)")
        //High BMI
        clearBMIField()
        info.weightPick("170");
        info.heightPick("180")
        info.bmiMsg("(Very severely obese BMI >40kg/m2)");

        //invalid input
        clearBMIField()
        info.weightPick("170");
        info.heightPick("1801")
        info.bmiMsg("(between -3 SD and -2 SD)");
    })
    it("Temperature Validation & Boundary Value testing",()=>
    {
      //visit vital with store session
      cy.visit('/vitals')
      cy.wait(5000)
      clientServices.addVital();
      //below Normal
      cy.get(info.selectors.temp).clear();
      info.tempPick('10');
      cy.get('.grid > :nth-child(5)').should("contain.text","Below normal <36.6°C");

      //Normal
      cy.get(info.selectors.temp).clear();
      info.tempPick('36.8');
      cy.get('.grid > :nth-child(5)').should("contain.text","Normal temperature 36.6-37°C");
      //above
      cy.get(info.selectors.temp).clear();
      info.tempPick('123');
      cy.get('.grid > :nth-child(5)').should("contain.text","Above normal >37°C");

    })
    it("BP validation and Boundary Value testing",()=>
    {
      //visit vital with store session
      cy.visit('/vitals')
      cy.wait(5000)
      clientServices.addVital();
      //unrecordable should disable
      info.systolicPick("91")
      info.diastolicPick('61')
      cy.get(info.selectors.bp).should('be.disabled')
      //sys & dia should disable
      cy.get(info.selectors.systolic).clear()
      cy.get(info.selectors.diastolic).clear()
      info.bpPick("Too High");
      cy.get(info.selectors.systolic).should("be.disabled");
      cy.get(info.selectors.diastolic).should("be.disabled");
      //boundary value testing
      info.bpPick("--Select--");
      //below
      info.systolicPick("10");
      cy.get('.grid > :nth-child(6)').should('contain.text','Below normal Systolic BP <90 mmHg')
      info.diastolicPick('12');
      cy.get('.grid > :nth-child(7)').should('contain.text','Below normal Diastolic BP <60 mmHg')
      cy.get(info.selectors.systolic).clear()
      cy.get(info.selectors.diastolic).clear()
      //normal
      info.systolicPick("90");
      cy.get('.grid > :nth-child(6)').should('contain.text','Normal Systolic BP 90-140 mmHg')
      info.diastolicPick('60');
      cy.get('.grid > :nth-child(7)').should('contain.text','Normal Diastolic BP 60-90 mmHg')
      cy.get(info.selectors.systolic).clear()
      cy.get(info.selectors.diastolic).clear();
      //above
      info.systolicPick("902");
      cy.get('.grid > :nth-child(6)').should('contain.text','systolic>180 mmHg seek emergency care')
      info.diastolicPick('602');
      cy.get('.grid > :nth-child(7)').should('contain.text','Diastolic BP>120 mmHg seek emergency care')
      cy.get(info.selectors.systolic).clear()
      cy.get(info.selectors.diastolic).clear();
    })

    it("Others field validations",()=>
    {
      cy.visit('/vitals')
      cy.wait(5000)
      clientServices.addVital();
      //below
      info.pulsePick("10")
      info.RespiratoryPick('10')
      info.oxygenPick('20');
      cy.get('.grid > :nth-child(9)').should("contain.text",'Low Pulse rate <60 b/m')
      cy.get('.grid > :nth-child(10)').should("contain.text",'Low Respiratory rate <12 b/m')
      cy.get('.grid > :nth-child(11)').should("contain.text",'Below normal oxygen saturation <95%')
      cy.get(info.selectors.pulseRate).clear()
      cy.get(info.selectors.respiratoryRate).clear()
      cy.get(info.selectors.oxygen).clear()
      //normal rate
      info.pulsePick("60")
      info.RespiratoryPick('12')
      info.oxygenPick('96');
      cy.get('.grid > :nth-child(9)').should("contain.text",'Normal Pulse rate 60-100b/m')
      cy.get('.grid > :nth-child(10)').should("contain.text",'Normal Respiratory rate 12-20b/m')
      cy.get('.grid > :nth-child(11)').should("contain.text",'Normal oxygen saturation 95-100%')
    })


  });
});
