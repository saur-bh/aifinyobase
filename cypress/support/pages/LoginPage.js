import BasePage from "./BasePage";
const locator = require("../locators/billomat-frontend/loginPage");
/**
 * Class representing a Login.
 * @extends BasePage
 */


class LoginPage extends BasePage {

  
 

/**
 * Function to  type in the email field of login page.
 * @property {String} text Text which needs to be entered.
 * @example
 * Login.email('automation@example.com');
*/
email(text){
	cy.get(locator.txtBoxEmail).type(text);
};

/**
 * Function to  type in the password field of login page.
 * @property {String} text Text which needs to be entered.
 * @example
 * Login.password('Welcome@8');
*/
password(text){
	cy.get(locator.txtBoxPassword).type(text);
};


/**
 * Function to click on the login button.
 * @example
 * Login.clickloginBtn();
*/
	clickloginBtn(){
		cy.get(locator.btnLogin).click();
		
	};
	
};


export const login = new LoginPage();