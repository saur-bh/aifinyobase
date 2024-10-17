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
    let buttonText;

    // Handle cases based on item passed
    if (item === 'Save' || item === 'Speichern') {
      buttonText = /Save|Speichern/;
    } else if (item === 'Cancel' || item === 'Abbrechen') {
      buttonText = /Cancel|Abbrechen/;
    }

    // Use cy.contains() to find and click the button with the matching text
    if (buttonText) {
      cy.contains(buttonText).click();
    } else {
      throw new Error('Unsupported button text passed: ' + item);
    }
  }

  /**
   * Function to  verify the status of the invoice.
   * @property {String} status value which needs to be entered either german / english
   * @example
   * invoice.verifyStatus('Draft');
   */
  verifyStatus(status) {
    if (status == 'Paid' || status === 'Bezahlt') {
      cy.get('.sidebar-box.state', { timeout: 20000 })
        .find('p', { timeout: 10000 })
        .invoke('text')
        .should('not.match', /Draft|Entwurf/)
        .and('match', /Paid|Bezahlt/);
    } else {
      cy.get('.sidebar-box.state', { timeout: 20000 })
        .find('p', { timeout: 10000 })
        .invoke('text')
        .should('match', /Draft|Entwurf/);
    }
  }

  /**
   * Function to  click button  the status of the invoice.
   * @property {String} action value which needs to be entered either german / english
   * @example
   * invoice.clickactionItem('Abschließen');
   */

  clickactionItem(action) {
    cy.get('.sidebar-box.confirmation--box', { timeout: 30000 })
      .should('be.visible')
      .contains(/complete|abschließen|Zustimmen|Approve|Cancel|Abbrechen/i)
      .click();
  }

  clickdialogBox(item) {
    if(item === 'Approve' || item === 'Zustimmen'){
      cy.get('.ui-dialog.ui-dialog--medium.ui-dialog--open')
      .contains(/Approve|Zustimmen/i)
      .click();
    }
    if(item === 'Abbrechen' || item === 'Cancel'){
      cy.get('.ui-dialog.ui-dialog--medium.ui-dialog--open')
      .contains(/Abbrechen|Cancel/i)
      .click();
    }
   
  }

  /**
   * Function to verify Invoice number
   */
  verifyInvoiceNumber(num) {
    cy.get(locator.invoicenum).should('be.visible').and('have.text', num);
  }

  // Helper function to fill in details for each position
  fillPositionDetails(
    positionIndex,
    title,
    description,
    quantity,
    price,
    taxRate,
    expectedNet,
    expectedGross,
  ) {
    // Locate the parent container based on position index
    cy.contains('.position-index', `#${positionIndex}`)
      .parents('.position-viewable')
      .within(() => {
        // Step 1: Fill the Title field (using placeholder)
        cy.get('input[placeholder="Title"], input[placeholder="Titel"]').type(title);

        // Step 2: Fill the Description field (using placeholder)
        cy.get('textarea[placeholder="Description"],textarea[placeholder="Beschreibung"]').type(description);

        // Step 3: Fill the Quantity field (by input ID 'positionQuantity')
        cy.get('#positionQuantity').type(quantity);

        // Step 4: Fill the Price field (using placeholder)
        cy.get('input[placeholder="Price"],input[placeholder="Preis"]').type(price);

        // Step 5: Select the Tax option (class selector for 'position-tax' with the given tax rate)
        cy.get('.position-tax .ui-select__single-value').click(); // Click the dropdown
        cy.contains(`${taxRate}`).click(); // Select the desired tax rate (e.g., '19% 19')

        // Step 6: Read the Net value (class 'position-net-gross-price-net-value') and store it in a variable
        cy.get('.position-net-gross-price-net')
          .invoke('text')
          .as(`netValue${positionIndex}`);

        // Step 7: Read the Gross value (class 'position-net-gross-price-gross') and store it in a variable
        cy.get('.position-net-gross-price-gross')
          .invoke('text')
          .as(`grossValue${positionIndex}`);
          cy.log("MY VALI ",this.convertToDEFormat("1,000.00 €"));
        // Step 8: Assert that the Net value contains the expected value
        cy.get(`@netValue${positionIndex}`).should('contain', expectedNet);
       

        // Step 9: Assert the Gross value contains the expected value
        cy.get(`@grossValue${positionIndex}`).should('contain', expectedGross);
        
      });
  }

   convertToDEFormat(value) {
    // Remove euro sign and any spaces
    value = value.replace('€', '').trim();
    
    // Replace comma with a temporary character to avoid confusion
    value = value.replace(',', 'TEMP');
    
    // Replace the decimal dot with a comma (for DE format)
    value = value.replace('.', ',');
    
    // Replace the temporary character (used for thousand separator) with a dot
    value = value.replace('TEMP', '.');
    
    return value;
  }
}
export const invoice = new InvoicePage();
