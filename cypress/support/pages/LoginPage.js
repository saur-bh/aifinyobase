// loginPage.js
import BasePage from "./BasePage";

/**
 * Class representing a Login page.
 * @extends BasePage
 */
class LoginPage extends BasePage {
  /**
   * Locators for the login page elements.
   * @type {Object}
   */
  locators = {
    /**
     * Locator for the email field.
     * @type {string}
     */
    emailField: "#emailField",
    /**
     * Locator for the password field.
     * @type {string}
     */
    passwordField: '[type="password"]',
    /**
     * Locator for the login button.
     * @type {string}
     */
    loginButton: "#loginFormButton > span",
  };

  /**
   * Types in the email field of the login page.
   * @param {string} text - The text to be entered.
   * @example
   * login.email('automation@example.com');
   */
  email(text) {
    cy.get(this.locators.emailField).type(text);
  }

  /**
   * Types in the password field of the login page.
   * @param {string} text - The text to be entered.
   * @example
   * login.password('Welcome@8');
   */
  password(text) {
    cy.get(this.locators.passwordField).type(text);
  }

  /**
   * Clicks on the login button.
   * @example
   * login.clickLoginBtn();
   */
  clickLoginBtn() {
    cy.get(this.locators.loginButton).click();
  }
}

/**
 * Exported instance of the LoginPage class.
 * @type {LoginPage}
 */
export const login = new LoginPage();
