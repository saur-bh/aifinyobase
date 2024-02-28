import BasePage from "./BasePage";
const locator = require("../locators/billomat-frontend/invoicePage");

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

description(text){
    cy.get('#document-name',{timeout: 10000}).should('be.visible')
    cy.get('#document-label').scrollIntoView().should('be.visible').type(text,{delay:100});
};

clickactionbutton(item){

    if("Abbrechen" || "Cancel"){
        cy.contains(item).click();
    }
    if("Save" | "Speichern"){
        cy.contains(item).click();
    }
    
};

/**
 * Function to  verify the status of the invoice.
 * @property {String} status value which needs to be entered either german / english
 * @example
 * invoice.verifyStatus('Draft');
*/
verifyStatus(status){

  if(status== 'Paid'){
    cy.get('.sidebar-box.state',{timeout:20000}).find('p',{timeout:10000}).should('not.have.text',("Draft")).and('have.text',(status));
  }else{
    cy.get('.sidebar-box.state',{timeout:20000}).find('p',{timeout:10000}).should('have.text',(status));
  }
       
            
    
                   


};

/**
 * Function to  click button  the status of the invoice.
 * @property {String} action value which needs to be entered either german / english
 * @example
 * invoice.clickactionItem('Abschließen');
*/

clickactionItem(action){
    cy.get('.sidebar-box.confirmation--box',{timeout:30000}).should("be.visible")
    switch (action) {
        case 'Abschließen':
        case 'Complete':
            cy.contains(action).click();
            break;
        case 'Zustimmen' :
        case 'Approve' :
            cy.contains(action).click();
            break;
        case 'Cancel':
            cy.contains(action).click();
            break;

        
    
    }

};

/**
 * Function to verify Invoice number
*/
verifyInvoiceNumber(num){

	cy.get(locator.invoicenum).should('be.visible').and('have.text',num);
}
	
};
export const invoice = new InvoicePage();