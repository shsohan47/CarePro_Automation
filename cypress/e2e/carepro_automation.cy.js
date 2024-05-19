import LoginPage from '../support/pageObjects/LoginPage'//create POM model for login page

describe('Authentication validation', () => {
  it('should Login with valid user', () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    cy.wait(3000)
    loginPage.fillUserName('tester');
    loginPage.fillPassword('tester2023!');
    loginPage.signIn();
  })
})