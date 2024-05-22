export default class facilityPage {
    selectors={
        province: ':nth-child(1) > .custom-input',
        district: '.gap-3 > :nth-child(2) > .custom-input',
        facility: '.overflow-auto > .custom-input',
        enterButton: '.button',
        sendFacilityRequest: '.text-ashColor',
        errorMessage: ':nth-child(1) > .input_error'
    }

    selectProvince(name)
    {
        return cy.get(this.selectors.province).select(name);
    }
    selectDistrict(name)
    {
        return cy.get(this.selectors.district).select(name);
    }
    clickFacility()
    {
        return cy.get(this.selectors.facility).click();
        
    }
    selectFacility(name)
    {
        return cy.get(this.selectors.facility).type(name);
    }

    logout() {

        cy.get(".mt-4").eq(1).within(()=>
    {
        cy.contains("Logout").scrollIntoView()
          .should('be.visible') // Ensure the element is visible
          .click({ force: true }); // Force click if necessary
    })
          
    }
    

    clickButton()
    {
        return cy.get(this.selectors.enterButton).click();
    }
    errorValidation(text)
    {
        return cy.get('.gap-3').within(()=>
    {
        cy.get(this.selectors.errorMessage).scrollIntoView().should("contain.text",text);
    })
    }
    facilityFunction()
    {
        cy.wait(4000)
    this.selectProvince("Lusaka");
    this.selectDistrict("Lusaka");
    this.selectFacility("Dr. Watson Dental Clinic",{delay:100});
    cy.wait(2000)
    this.clickFacility();
    cy.get('.absolute > .border').click();
    this.clickButton()
    }
}