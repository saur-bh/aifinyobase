import { login } from "../../../support/pages/LoginPage";
import { commonitem } from "../../../support/pages/CommonItemPage";
import { documentinbox } from "../../../support/pages/DocumentInboxPage";
describe('Framework Test Suite', () => {
	
	let gd;

  before('Add all data to be used while testing', () => {
	cy.loginToApp();
    cy.fixture("billomat-frontend-prod-data/prod-data").then((data) => {
      gd = data;
    });
	

	});
	
	it(`Should able to create new invoice with existing client`, () => {
		
			
			commonitem.selectmenuitem('finance');

			commonitem.clickshortcutItem('supplierinvoice');

            documentinbox.uploadFile(gd.finetrading.upload);
          
	})
	
	
});