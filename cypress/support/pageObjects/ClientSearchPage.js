export default class clientService{
    selectors={
        NRC : '.gap-4 > :nth-child(2)',
        NRCvalue: '.custom-input',
        searchButton: '.absolute > .rounded-full',
        clientModal: '.mt-7 > :nth-child(1) > .shadow > .gap-5',
        attendToPatient: '.bg-greenColor',
        biometricModal: '.modal-box',
        skipButton: '.second_btn_v2',
        skipReasonModal: '.modal-box',
        generalReason: ':nth-child(1) > .flex > .min-w-\[14px\]',
        saveButton: '.main_btn',
        vital: ':nth-child(2) > a > .flex',
        actions: '.gap-1.text-textColor > .gap-1',
        dropdown: '.dropdown-content',
        addVital: '.gap-4 > .flex'
    }

    nrcClick()
    {
        return cy.get(this.selectors.NRC).click()
        
    }
    NRCvalueInput(value)
    {
        return cy.get(this.selectors.NRCvalue).type(value)
    }
    search()
    {
        return cy.get(this.selectors.searchButton).click();
    }
    clientModalCheck()
    {
        return cy.get(this.selectors.clientModal).should('exist');
    }
    attendToPatientClick()
    {
        return cy.get(this.selectors.attendToPatient).click();
    }
    biometricValidation()
    {
      return  cy.get(this.selectors.biometricModal).should("exist").within(()=>
    {
        cy.get(this.selectors.skipButton).click();
    })
    }
    skipBiometricValidation()
    {
      return  cy.get(this.selectors.skipReasonModal).should("exist").within(()=>
    {
        cy.get(this.selectors.generalReason).click();
        cy.get(this.selectors.saveButton).click();
    })
    }
    vitalButtonClick()
    {
        return cy.get(this.selectors.vital).click();
    }
    action()
    {
        cy.get(this.selectors.actions).click()
        cy.get(this.selectors.dropdown).eq(2).within(()=>
    {
        cy.contains("Edit Profile").click()
    })

    }
    addVital()
    {
        return cy.get(this.selectors.addVital).click();
    }




}