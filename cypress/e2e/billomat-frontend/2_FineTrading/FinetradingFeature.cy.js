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

		
		supplier.searchsupplierviaCompanyandClick(gd.supplier.city);
		


		finetrading.verifyDocumentisloaded();
		
	  
});


it(`BF-25: Purchasing Frame`, () => {
		
			
	commonitem.selectmenuitem('finance');
	finetrading.verifypurchasing();
  
});


it(`BF-31: Submit missing mandatory field`, () => {
		
			
	commonitem.selectmenuitem('finance');

			commonitem.clickshortcutItem('supplierinvoice');

            documentinbox.fileUpload(gd.finetrading.upload1);

			documentinbox.selectDocumentTypeandClick(gd.docinbox.doctype , gd.docinbox.operation);


			supplier.typeZip(gd.supplier.zip);
		supplier.typecompany(gd.supplier.company)
			supplier.searchsupplierandClick(gd.supplier.city);

			finetrading.verifyDocumentisloaded();
			finetrading.setInvoiceDate("");
			finetrading.setdescription("This is test description")
			finetrading.clickbtnbasedonText("Finance now");
			finetrading.verifyToastMessage(gd.finetrading.errorinvoicedate);
			finetrading.setInvoiceDate("01/02/2024");
			finetrading.setDueDate("");
			finetrading.clickbtnbasedonText("Finance now");
			finetrading.verifyToastMessage(gd.finetrading.errordeliverydate);
			finetrading.setDileveryDate("20/02/2024");
			finetrading.setDueDate("20/02/2024");
			finetrading.setInvoiceNumber("");
			finetrading.setdescription("This is test description")
			finetrading.clickbtnbasedonText("Finance now");
			finetrading.verifyToastMessage(gd.finetrading.errorinvoicetoast);
			finetrading.clickbtnbasedonText("Cancel");
			
  
});

afterEach('logout',()=>{

	login.navigateToUrl('/app/auth/logout')

})
	
	
});