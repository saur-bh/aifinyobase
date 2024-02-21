import BasePage from "./BasePage";

const locator = require("../locators/billomat-frontend/documentInboxPage.json");
/**
 * Class representing a Navigation bar menu item and its action.
 * @extends BasePage
 */

class DocumentInboxPage extends BasePage
 { 


/**
 * Function to  upload file 
 * @property {String} path path of the file.
 * @example
 * documentinbox.upload("filePath");
*/
fileUpload(filePath){

	cy.get(locator.fileupload).selectFile(filePath,{force : true});
	
};

/**
 * Function to  upload file 
 * @property {String} path path of the file.
 * @example
 * documentinbox.upload("filePath");
*/
uploadFile(filePath){

	cy.get(locator.uploadfile).selectFile(filePath,{force : true});
	
};

/**
 * Function to  select the item from the document types dropdown. 
 * @property {String}  documentType operation to be slected
 * @property {String} operation to be performaed 
 * @example
 * documentinbox.selectDocumentType("Finetrading Invoice", "Apply for finetrading");
*/
selectDocumentTypeandClick(documentType,operation){
	cy.get(locator.container).click();
	cy.get(locator.option).each(($el) => {
        const text = $el.text();
        // Now you have the text, perform the click operation
		if (text.includes(documentType)) {
			cy.wrap($el).click();
		}
        
    });
	cy.contains(operation).click();
	
};




    
}

export const documentinbox = new DocumentInboxPage();