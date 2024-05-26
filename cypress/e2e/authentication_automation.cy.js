import LoginPage from "../support/pageObjects/LoginPage"; //create POM model for login page
//hi

describe("Authentication validation", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    //base url
    loginPage.visit();
  });
  it("should Login with valid user", () => {
    cy.wait(2000);
    loginPage.fillUserName("tester");
    loginPage.fillPassword("tester2023!");
    loginPage.clickRememberButton();
    cy.get(loginPage.selectors.rememberMe).should("be.checked");
    loginPage.signIn();
    cy.url().should(
      "be.equal",
      "https://staging-scweb.arcapps.org/select-facility"
    );
  });
  it('"check validation", "Login with unauthenticate user" or "invalid credential"', () => {
    cy.wait(2000);
    //validation check in empty field for username
    loginPage.fillUserName("randomUser");
    loginPage.signIn();
    loginPage.verifyErrorMessage("Required!");
    //validation check in empty field for username
    loginPage.clearField(".flex-col.undefined > .custom-input");
    loginPage.fillPassword("12345");
    loginPage.signIn();
    loginPage.verifyErrorMessage("Required!");
    //validation check for invalid credentials
    loginPage.fillUserName("InvalidUser");
    loginPage.signIn();
    loginPage.verifyErrorModal();
    loginPage.verifyErrorMessageV1("Invalid username or password!");
  });

  it("Validate Unauthorize user", () => {
    //direct visit the url that are unauthorize without login
    cy.visit("/select-facility");
    cy.wait(2000);
    cy.url().should("not.equal", "/select-facility");
  });
});
