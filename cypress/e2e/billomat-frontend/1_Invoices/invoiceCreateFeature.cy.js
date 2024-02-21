import { login } from "../../../support/pages/LoginPage";
import { commonitem } from "../../../support/pages/CommonItemPage";
import { client } from "../../../support/pages/ClientPage";
import { invoice } from "../../../support/pages/InvoicePage";
describe('Framework Test Suite', () => {
	
	let gd;

  beforeEach('Add all data to be used while testing', () => {
	cy.loginToApp();
    cy.fixture("billomat-frontend-prod-data/prod-data").then((data) => {
      gd = data;
    });
	

	});
	
	it(`Should able to create new invoice with existing client`, () => {
		
			
			commonitem.selectmenuitem('invoices');
			commonitem.clickshortcutItem('Neue Rechnung');

			client.searchviaClientNumberandClick(gd.client.clientNumber);
			
			invoice.description(gd.invoice.description);
			invoice.clickactionbutton('Save');
			invoice.verifyStatus('Draft');
			invoice.clickactionItem('Complete');
			invoice.clickactionItem('Approve');
			invoice.verifyStatus('Paid');
				// comment
	
	})
	
	afterEach('logout',()=>{

		login.navigateToUrl('/app/auth/logout')

	})
	
});

