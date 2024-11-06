import BasePage from './BasePage';
const locator = require('../locators/billomat-frontend/clientPage');

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

  description(text) {
    cy.get("td[data-label='Client Number'], td[data-label='Kunden-Nr']").type(text, { delay: 100 });
  }

  searchviaClientNumberandClick(value) {
    cy.contains('label', /Client Number|Kunden-Nr/) // find the label by its text
      .parent() // get the parent element that contains both the label and input
      .find('input') // find the input field within that parent
      .type(value, { delay: 10 }); // example: type a value in the input field
    cy.log('I am executing afterwated ');
    cy.get("td[data-label='Client Number'], td[data-label='Kunden-Nr']").should('have.text', value).prev('td').click();
    cy.contains('button',/Apply|Übernehmen/).should('exist').click();
    
  }
}

export const client = new ClientPage();
