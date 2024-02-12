import BasePage from "./BasePage";
const locator = require("../locators/billomat-frontend/clientPage");

/**
 * Class representing a Clients.
 * @extends BasePage
 */

class ClientPage extends BasePage {

/**
 * Function to  type in the client number to search in client dialogbox.
 * @property {String} value Text which needs to be entered.
 * @example
 * client.clientNumber('TEST123');
*/
searchviaClientNumberandClick(value){
	cy.get(locator.clientnumber).type(value ,{ delay: 1000});
    cy.get(locator.tabledata).first().should('have.text',value).click();
};

/**
 * Function to  type in the client number to search in client dialogbox.
 * @property {String} value Text which needs to be entered.
 * @example
 * client.clientNumber('TEST123');
*/

description(text){
    cy.get(locator.description).type(text,{delay:100});
};


	
};

export const client = new ClientPage();