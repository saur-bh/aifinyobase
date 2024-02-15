import BasePage from "./BasePage";

const locator = require("../locators/billomat-frontend/documentInboxPage.json");
/**
 * Class representing a Navigation bar menu item and its action.
 * @extends BasePage
 */

class DocumentInboxPage extends BasePage
 { 


/**
 * Function to  select menu item from  page.
 * @property {String} item Menu item to be selected
 * @example
 * documentinbox.upload("filePath");
*/
uploadFile(filePath){

	cy.get(locator.fileupload).selectFile(filePath,{force : true});
	
};


    
}

export const documentinbox = new DocumentInboxPage();