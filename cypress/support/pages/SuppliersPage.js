import BasePage from './BasePage';
const locator = require('../locators/billomat-frontend/supplierPage');

/**
 * Class representing a Navigation bar menu item and its action.
 * @extends BasePage
 */

class SuppliersPage extends BasePage {
  /**
   * Function to  type in the company name to search in supplier dialogbox.
   * @property {String} value Text which needs to be entered.
   * @example
   * supplier.searchsupplierandClick('01097');
   */
  searchsupplierandClick(value) {
    cy.get(locator.city).type(value, { delay: 1000 });
    cy.get(locator.tabledata).last().should('have.text', value).click();
  }

  /**
   * Function to  type in the company name to search in supplier dialogbox.
   * @property {String} value Text which needs to be entered.
   * @example
   * supplier.zip('01097');
   */
  typeZip(value) {
    cy.get(locator.zip).type(value, { delay: 1000 });
  }

  /**
   * Function to  type in the company name to search in supplier dialogbox.
   * @property {String} value Text which needs to be entered.
   * @example
   * supplier.zip('01097');
   */
  typecompany(value) {
    cy.get(locator.company).type(value, { delay: 1000 });
  }

  verifySupplierName(text) {
    cy.get(locator.companyname)
      .first()
      .should('be.visible')
      .and('have.value', text);
  }
}

export const supplier = new SuppliersPage();
