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
/**
 * Function to  type in the client number to search in client dialogbox.
 * @property {String} value Text which needs to be entered.
 * @example
 * client.clientNumber('TEST123');
*/

description(text){
    cy.get(locator.description).type(text,{delay:100});
};

searchviaClientNumberandClick(value){

    cy.get(locator.clientnumber).each(($label) => {
        cy.wrap($label).invoke('text').then((text) => {
          if (text.trim()== 'Client Number') {
            cy.wrap($label).parent().find('input').type(value,{ delay: 10});
          }
        });
       

      });
      cy.log("I am executing afterwated ")
      cy.get(locator.tabledata).should('have.text',value).prev('td').click();
      cy.contains('span', 'Apply').click();


};
	
};

export const client = new ClientPage();