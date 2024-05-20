export default class facilityPage {
    selectors={
        province: ':nth-child(1) > .custom-input',
        district: '.gap-3 > :nth-child(2) > .custom-input',
        facility: '.overflow-auto > .custom-input',
        enterButton: '.button',
        sendFacilityRequest: '.text-ashColor',
        logOut: '.text-center > .text-\[11px\]',
        errorMessage: '.gap-\[1px\] > .text-red-500'
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

    logout()
    {
        return cy.get(this.selectors.logOut).click({force:true});
    }

    clickButton()
    {
        return cy.get(this.selectors.enterButton).click();
    }
    errorValidation(text)
    {
        return cy.get(this.selectors.errorMessage).should("contain.text",text);
    }
    facilityFunction()
    {
        this.selectProvince("Lusaka");
    this.selectDistrict("Lusaka");
    this.selectFacility("Dr. Watson Dental Clinic",{delay:100});
    cy.wait(2000)
    this.clickFacility();
    cy.get('.absolute > .border').click();
    this.clickButton()
    }
}