
import BasePage from "./BasePage";
const locator = require("../locators/billomat-frontend/supplierPage");

/**
 * Class representing a Navigation bar menu item and its action.
 * @extends BasePage
 */

class SuppliersPage extends BasePage
 { 


/**
 * Function to  type in the company name to search in supplier dialogbox.
 * @property {String} value Text which needs to be entered.
 * @example
 * supplier.searchsupplierandClick('01097');
*/
searchsupplierandClick(value){
	cy.get(locator.name).type(value ,{ delay: 1000});
    cy.get(locator.tabledata).last().should('have.text',value).click();
};


}

export const supplier = new SuppliersPage();