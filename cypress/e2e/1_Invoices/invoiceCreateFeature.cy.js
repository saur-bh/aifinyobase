import { login } from "../../support/pages/LoginPage";
import { commonitem } from "../../support/pages/CommonItemPage";
import { client } from "../../support/pages/ClientPage";
import { invoice } from "../../support/pages/InvoicePage";
describe('Create Invoice Feature', function() {
	

	before(function() {
		login.navigateToUrl('/app');
		login.email('saurabh.verma@aifinyo.de');
		login.password('Welcome@8');
		login.clickloginBtn();
		//cy.closeCookies();

	});
	
	it(`Should able to create new invoice with existing client`, function() {
		


			commonitem.selectmenuitem('invoices');
			
			commonitem.clickshortcutItem('Neue Rechnung');

			client.searchviaClientNumberandClick('TEST123');
			
			invoice.description('This is test invoice');
			invoice.clickSave();
			invoice.verifyStatus('Entwurf');
			invoice.clickactionItem('Abschließen');
			invoice.clickactionItem('Zustimmen');
			invoice.verifyStatus('Bezahlt');

			

	})
	
	
});