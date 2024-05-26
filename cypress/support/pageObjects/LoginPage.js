//Create a class model for Login page
export default class LoginPage {
    selectors = {
       username: '.flex-col.undefined > .custom-input',
       password: '.relative > .custom-input',
       rememberMe: '#rememberMe',
       errorMessageModal:'.alert',
       errorMessage: '.input_error',
       forgetPassword: '.heading_5',
       signInButton:'.button'

   };
   

   visit(){
       cy.visit('/');
       return this
   }
   login()
   {
       cy.visit('/');
       cy.wait(2000);
       cy.get(this.selectors.username).type("tester");
       cy.get(this.selectors.password).type("tester2023!");
       cy.get(this.selectors.signInButton).click();
       cy.wait(3000)
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
       return cy.get(this.selectors.errorMessage).should('contain.text',message);
   }
   verifyErrorMessageV1(msg)
   {
       cy.get('.alert').should("contain.text",msg);
   }
  
   clickRememberButton()
   {
       return cy.get(this.selectors.rememberMe).click()
   }
}