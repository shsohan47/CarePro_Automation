import LoginPage from "../support/pageObjects/LoginPage";
import facilityPage from "../support/pageObjects/FacilityPage";
import clientService from "../support/pageObjects/ClientSearchPage";
describe("client-search functionality ",()=>
{
    const loginPage = new LoginPage()
    const facility = new facilityPage()
    const clientServices = new clientService()
    before(()=>
{
    loginPage.login();
    facility.facilityFunction();
    cy.wait(2000);

})
it("go to vital functionality",()=>
{
    clientServices.nrcClick();
    clientServices.NRCvalueInput("111111111");
    clientServices.search();
    clientServices.clientModalCheck();
    clientServices.attendToPatientClick();
    cy.wait(3000)
    //clientServices.biometricValidation();
    //clientServices.skipBiometricValidation();
    clientServices.vitalButtonClick();
})

it("User data manupulation",()=>
{
    clientServices.nrcClick();
    clientServices.NRCvalueInput("111111111");
    clientServices.search();
    clientServices.clientModalCheck();
    clientServices.attendToPatientClick();
    cy.wait(3000)
    //clientServices.biometricValidation();
    //clientServices.skipBiometricValidation();
    clientServices.vitalButtonClick();
    cy.wait(5000)
    clientServices.addVital();

})
})