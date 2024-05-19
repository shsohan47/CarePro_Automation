//Create a class model for Login page
export default class LoginPage {
     selectors = {
        username: '.flex-col.undefined > .custom-input',
        password: '.relative > .custom-input',
        rememberMe: '#rememberMe',
        errorMessageModal:'.alert',
        errorMessage: '.text-\[10px\]',
        forgetPassword: '.heading_5',
        signInButton:'.button'

    };

    visit(){
        cy.visit('/');
        return this
    }

    fillUserName(userNameValue){
        return cy.get(this.selectors.username).type(userNameValue);
    }

    fillPassword(passwordValue)
    {
        return cy.get(this.selectors.password).type(passwordValue)
    }
    clearField(fieldName){
        return cy.get(fieldName).clear()
    }
    signIn(){
        return cy.get(this.selectors.signInButton).click()
    }
    verifyErrorModal(){
        return cy.get(this.selectors.errorMessageModal).should('exist')
    }

    verifyErrorMessage(message)
    {
        return cy.get(this.selectors.errorMessage).should('contain.text',message)
    }
    clickRememberButton()
    {
        return cy.get(this.selectors.rememberMe).click
    }
}