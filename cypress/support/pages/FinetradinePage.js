
import BasePage from "./BasePage";
import { invoice } from "./InvoicePage";
const locator = require("../locators/billomat-frontend/finetradingPage.json");

/**
 * Class representing a Navigation bar menu item and its action.
 * @extends BasePage
 */

class FinetradingPage extends BasePage
 { 


/**
 * Function to verify document load for display of fintrading page
 * @property 
 * @example
 * finetrading.verifyDocumentisloaded();
*/
verifyDocumentisloaded(){
	cy.get(locator.pageisDisplayed,{timeout:80000}).should('be.visible');
};

/**
 * Function to verify purchanging frame
 * @property 
 * @example
 * finetrading.verifypurchasing();
*/
verifypurchasing(){
	var freepurchase, usedpurchanse, totalpurchase;
	cy.get('iframe').then(($iframe) => {
		// Switch to the iframe
		$iframe.remove();
		
		cy.wait(1000)
		cy.window().then((parentWindow) => {
			
			cy.get(locator.purchaceboxvalue).first().invoke('text').as('firstText');
			cy.get(locator.purchaceboxvalue).eq(1).invoke('text').as('secondText');
			cy.get(locator.purchaceboxvalue).last().invoke('text').as('lastText');

			
			cy.get('@firstText').then((firstText) => {
				cy.get('@secondText').then((secondText) => {
					cy.get('@lastText').then((lastText) => {
						// You have access to all three text value
						var freepurchase = parseFloat(firstText.split(" ")[0].replace(',',""))
						var usedpurchase = parseFloat(secondText.split(" ")[0].replace(',',""))
						var totalpurchase = parseFloat(lastText.split(" ")[0].replace(',',""))
						//cy.log(lastText.split(" ")[0].replace(',',""));
						expect(freepurchase+usedpurchase).to.be.eq(totalpurchase)
					});
				});
			});




		});
	});
	
};


/**
 * Function to click on Finance now button 
 * @property 
 * @example
 * finetrading.clickFinanceNow();
*/
clickbtnbasedonText(text){

	cy.contains(text).click();
};
/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setInvoiceDate("26/02/2024");
*/
setInvoiceDate(date_text){

	if(date_text == ""){

		cy.get(locator.invoicedate).clear().tab();

	}else{
		cy.get(locator.invoicedate).clear().type(date_text,{ delay: 500});
		cy.get(locator.invoicedate).tab();
	}
	
};
/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setDueDate("26/02/2024");
*/
setDueDate(date_text){
	if(date_text == ""){

		cy.get(locator.duedate).clear().tab();

	}else{
		cy.get(locator.duedate).clear().type(date_text,{ delay: 500});
		cy.get(locator.duedate).tab();
	}
	
};

/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setDileveryDate("26/02/2024");
*/
setDileveryDate(date_text){
	if(date_text == ""){

		cy.get(locator.deliverydate).clear().tab();

	}else{
		cy.get(locator.deliverydate).clear().type(date_text,{ delay: 500});
		cy.get(locator.deliverydate).tab();
	}
	
};


/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setInvoiceNumber("TEST_231050527");
*/
setInvoiceNumber(text){
	if(text == ""){

		cy.get(locator.invoicenumber).clear().tab();

	}else{
		cy.get(locator.invoicenumber).clear().type(text,{ delay: 500});
		cy.get(locator.invoicenumber).tab();
	}
	
};


/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setInvoiceNumber("TEST_231050527");
*/
setdescription(text){
	if(text == ""){

		cy.get(locator.deliverydate).clear().tab();

	}else{
		cy.get(locator.deliverydate).clear().type(text,{ delay: 500});
		cy.get(locator.deliverydate).tab();
	}
	
};



/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setInvoiceNumber("TEST_231050527");
*/
verifyToastMessage(text){
	cy.get(locator.errortoast,{timeout:10000}).find('span',{timeout:10000}).should('contain.text',(text));
	
};


/**
 * Function to  verify the invoice number when user click on table 
 * @example
 * finetrading.verifyInvoiceNumberClickTable();
*/
verifyInvoiceNumberClickTable(){
	cy.get(locator.tablerow).should('be.visible').first()
	.find(locator.datarownumber).invoke('text').as('invoicenumber')
	cy.get(locator.tablerow).first()
	.find(locator.datarownumber).click()

	cy.get('@invoicenumber').then((num) => {
		cy.log('Invoice Number: ' + num);
		// You can perform further actions with the extracted text here
		invoice.verifyInvoiceNumber(num)
	
	  });
	
};



}

export const finetrading = new FinetradingPage();