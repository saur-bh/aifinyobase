import BasePage from './BasePage';
const locator = require('../locators/billomat-frontend/invoicePage');

/**
 * Class representing a Invoices.
 * @extends BasePage
 */
class InvoicePage extends BasePage {
  /**
   * Function to  type in the description for the new invoice.
   * @property {String} text Text which needs to be entered.
   * @example
   * invoice.description('This is test description');
   */

  description(text) {
    cy.get(locator.txt_invoiceNumber, { timeout: 10000 }).should('be.visible');

    cy.get(locator.txt_description)
      .scrollIntoView()
      .should('be.visible')
      .type(text, { delay: 100 });
  }

  clickactionbutton(item) {
    if ('Abbrechen' || 'Cancel') {
      cy.contains(item).click();
    }
    if ('Save' | 'Speichern') {
      cy.contains(item).click();
    }
  }

  /**
   * Function to  verify the status of the invoice.
   * @property {String} status value which needs to be entered either german / english
   * @example
   * invoice.verifyStatus('Draft');
   */
  verifyStatus(status) {
    if (status == 'Paid') {
      cy.get('.sidebar-box.state', { timeout: 20000 })
        .find('p', { timeout: 10000 })
        .should('not.have.text', 'Draft')
        .and('have.text', status);
    } else {
      cy.get('.sidebar-box.state', { timeout: 20000 })
        .find('p', { timeout: 10000 })
        .should('have.text', status);
    }
  }

  /**
   * Function to  click button  the status of the invoice.
   * @property {String} action value which needs to be entered either german / english
   * @example
   * invoice.clickactionItem('Abschließen');
   */

  clickactionItem(action) {
    cy.get('.sidebar-box.confirmation--box', { timeout: 30000 }).should(
      'be.visible',
    );
    switch (action) {
      case 'Abschließen':
      case 'Complete':
        cy.contains(action).click();
        break;
      case 'Zustimmen':
      case 'Approve':
        cy.contains(action).click();
        break;
      case 'Cancel':
        cy.contains(action).click();
        break;
    }
  }

  /**
   * Function to verify Invoice number
   */
  verifyInvoiceNumber(num) {
    cy.get(locator.invoicenum).should('be.visible').and('have.text', num);
  }

    // Helper function to fill in details for each position
 fillPositionDetails(positionIndex, title, description, quantity, price, taxRate, expectedNet, expectedGross) {
        // Locate the parent container based on position index
        cy.contains('.position-index', `#${positionIndex}`).parents('.position-viewable').within(() => {
          
          // Step 1: Fill the Title field (using placeholder)
          cy.get('input[placeholder="Title"]').type(title);
    
          // Step 2: Fill the Description field (using placeholder)
          cy.get('textarea[placeholder="Description"]').type(description);
    
          // Step 3: Fill the Quantity field (by input ID 'positionQuantity')
          cy.get('#positionQuantity').type(quantity);
    
          // Step 4: Fill the Price field (using placeholder)
          cy.get('input[placeholder="Price"]').type(price);
    
          // Step 5: Select the Tax option (class selector for 'position-tax' with the given tax rate)
          cy.get('.position-tax .ui-select__single-value').click();  // Click the dropdown
          cy.contains(`${taxRate}`).click();  // Select the desired tax rate (e.g., '19% 19')
    
          // Step 6: Read the Net value (class 'position-net-gross-price-net-value') and store it in a variable
          cy.get('.position-net-gross-price-net').invoke('text').as(`netValue${positionIndex}`);
    
          // Step 7: Read the Gross value (class 'position-net-gross-price-gross') and store it in a variable
          cy.get('.position-net-gross-price-gross').invoke('text').as(`grossValue${positionIndex}`);
    
         // Step 8: Assert that the Net value contains the expected value
cy.get(`@netValue${positionIndex}`).should('contain', expectedNet);
    
          // Step 9: Assert the Gross value contains the expected value
          cy.get(`@grossValue${positionIndex}`).should('contain', expectedGross);
        });
      }
}
export const invoice = new InvoicePage();
