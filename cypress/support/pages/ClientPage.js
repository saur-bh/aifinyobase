import BasePage from "./basePage";

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
	cy.get('#clientNumber').type(value ,{ delay: 1000});
    cy.get('tbody > .table--row', {timeout:10000}).click();
};

/**
 * Function to  type in the client number to search in client dialogbox.
 * @property {String} value Text which needs to be entered.
 * @example
 * client.clientNumber('TEST123');
*/

description(text){
    cy.get('[name="document-label"]').type(text,{delay:100});
};


	
};

export const client = new ClientPage();