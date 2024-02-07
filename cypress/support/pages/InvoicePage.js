import BasePage from "./BasePage";

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

clickSave(){

    cy.contains('Speichern'||'Save').click();
};

/**
 * Function to  verify the status of the invoice.
 * @property {String} status value which needs to be entered either german / english
 * @example
 * invoice.verifyStatus('Draft');
*/
verifyStatus(status){

    switch (status) {
        case ('Draft'|| 'Entwurf'):
            cy.get('.sidebar-box.state').find('p').should('contain.value', (status));
            break;
    
        case ('Paid'|| 'Entwurf'):
            break;
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
            cy.contains(action).click();
            break;
        case 'Zustimmen' :
            cy.contains(action).click();
            break;
        
    
    }

};
	
};
export const invoice = new InvoicePage();