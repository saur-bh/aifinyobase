
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
	cy.get('iframe').then(($iframe) => {
		// Switch to the iframe
		$iframe.remove();
		cy.window().then((parentWindow) => {
			cy.get(locator.purchaceboxvalue).each((arr,i) => {

				//let freePurchase = parseFloat(arr.text().split(' ')[0]);
				//let usedpurchase = parseFloat(arr.text().split(' ')[0]);
				//let totalpurchase = parseFloat(arr.text().split(' ')[0]);
				cy.log(arr.text());
				cy.log(i)
				//expect(freePurchase+usedpurchase).to.eq(totalpurchase)
			});
		});
	});
	
};


}

export const finetrading = new FinetradingPage();