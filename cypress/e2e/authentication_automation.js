import LoginPage from '../support/pageObjects/LoginPage'//create POM model for login page
//hi

describe('Authentication validation', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    //base url
    loginPage.visit();
});
  it('should Login with valid user', () => {
    cy.wait(3000)
    loginPage.fillUserName('tester');
    loginPage.fillPassword('tester2023!');
    loginPage.clickRememberButton();
    cy.get(loginPage.selectors.rememberMe).should("be.checked")
    loginPage.signIn();
    cy.url().should("be.equal","https://carepro-training.ihmafrica.com/select-facility")
  })
  it('"check validation", "Login with unauthenticate user" or "invalid credential"',()=>
  {
    cy.wait(3000);
    //validation check in empty field for username
    loginPage.fillUserName("randomUser");
    loginPage.signIn();
    loginPage.FieldErrorModal("Required!");
    //validation check in empty field for username
    loginPage.clearField('.flex-col.undefined > .custom-input');
    loginPage.fillPassword('12345');
    loginPage.signIn();
    loginPage.FieldErrorModal("Required!");
    //validation check for invalid credentials
    loginPage.fillUserName("InvalidUser");
    loginPage.signIn();
    loginPage.verifyErrorModal();
    loginPage.verifyErrorMessage("Invalid username or password!");
    
  })

  it.only("Validate Unauthorize user",()=>
  {
    //direct visit the url that are unauthorize without login
    cy.visit('/select-facility')
    cy.wait(2000)
    cy.url().should("not.equal",'/select-facility')
  })
})