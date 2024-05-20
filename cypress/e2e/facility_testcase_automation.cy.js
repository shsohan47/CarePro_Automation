import LoginPage from "../support/pageObjects/LoginPage"
import facilityPage from "../support/pageObjects/FacilityPage";
describe("facility testCases",()=>
{
    const loginPage = new LoginPage();
    const facility = new facilityPage();
    beforeEach(()=>
{
    loginPage.login();
}) 
    it("redirect URL is as expected & invalid facility select test case",()=>
{
    
    cy.url().should("equal","https://carepro-training.ihmafrica.com/select-facility");
    //check empty field show the error message
    facility.clickButton();
    facility.errorValidation('Required!');

})

it("positive testCase with valid credential ",()=>
{
    facility.selectProvince("Lusaka");
    facility.selectDistrict("Lusaka");
    facility.selectFacility("Dr. Watson Dental Clinic",{delay:100});
    cy.wait(2000)
    facility.clickFacility();
    cy.get('.absolute > .border').click();
    facility.clickButton()
})
it("Logout Functionality in facility panel",()=>
{
    facility.logout();
    cy.url().should('equal',"https://carepro-training.ihmafrica.com/");
})

it("send facility request functionality",()=>
{
    cy.get(facility.selectors.sendFacilityRequest).click()
    cy.url().should("equal","https://carepro-training.ihmafrica.com/request-facility")
})
})