import { login } from "../../../support/pages/LoginPage";
import { commonitem } from "../../../support/pages/CommonItemPage";
import { documentinbox } from "../../../support/pages/DocumentInboxPage";
import {supplier} from "../../../support/pages/SuppliersPage";
import {finetrading} from "../../../support/pages/FinetradinePage"
describe('Framework Test Suite', () => {
	
	let gd;

  beforeEach('Add all data to be used while testing', () => {
	cy.loginToApp();
    cy.fixture("billomat-frontend-prod-data/prod-data").then((data) => {
      gd = data;
    });
	

	});

	
	it(`BF-13 :Submit for fine trading with existing supplier`, () => {
		
			
			commonitem.selectmenuitem('finance');

			commonitem.clickshortcutItem('supplierinvoice');

            documentinbox.fileUpload(gd.finetrading.upload1);

			documentinbox.selectDocumentTypeandClick(gd.docinbox.doctype , gd.docinbox.operation);



			supplier.searchsupplierandClick(gd.supplier.city);

			finetrading.verifyDocumentisloaded();
			
          
	});


	it(`BF-15:  Upload of Invoice from document Inbox`, () => {
		
			
		commonitem.selectmenuitem('inboxdocuments');

		documentinbox.uploadFile(gd.finetrading.upload2);

		documentinbox.selectDocumentTypeandClick(gd.docinbox.doctype , gd.docinbox.operation);

		supplier.searchsupplierandClick(gd.supplier.city);

		finetrading.verifyDocumentisloaded();
		
	  
});

afterEach('logout',()=>{

	login.navigateToUrl('/app/auth/logout')

})
	
	
});