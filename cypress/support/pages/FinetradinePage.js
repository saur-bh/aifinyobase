
import BasePage from "./BasePage";
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
						// You have access to all three text values
						cy.log(`First textzzzzzz: ${firstText}`);
						cy.log(`Second text: ${secondText}`);
						cy.log(`Last text: ${lastText}`);
			
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
		cy.get(locator.invoicedate).clear().type(date_text);
	}
	
};
/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setDueDate("26/02/2024");
*/
setDueDate(date_text){
	if(date_text===""){

		cy.get(locator.duedate).clear().tab();

	}else{
		cy.get(locator.duedate).clear().type(date_text);
	}
	
};

/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setDileveryDate("26/02/2024");
*/
setDileveryDate(date_text){
	if(date_text=""){

		cy.get(locator.deliverydate).clear().tab();

	}else{
		cy.get(locator.deliverydate).clear().type(date_text);
	}
	
};


/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setInvoiceNumber("TEST_231050527");
*/
setInvoiceNumber(text){
	if(text=""){

		cy.get(locator.deliverydate).clear().tab();

	}else{
		cy.get(locator.deliverydate).clear().type(text);
	}
	
};


/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setInvoiceNumber("TEST_231050527");
*/
setdescription(text){
	if(text=""){

		cy.get(locator.deliverydate).clear().tab();

	}else{
		cy.get(locator.deliverydate).clear().type(text);
	}
	
};



/**
 * Function to  select the item from the document types dropdown. 
 *  @property {String} txt "12/12/2023"
 * @example
 * finetrading.setInvoiceNumber("TEST_231050527");
*/
verifyToastMessage(text){
	cy.get(locator.errortoast,{timeout:10000}).find('span',{timeout:10000}).should('have.text',(text));
	
};


}

export const finetrading = new FinetradingPage();