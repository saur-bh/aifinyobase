import { login } from "../../../support/pages/LoginPage";
import { commonitem } from "../../../support/pages/CommonItemPage";
import { client } from "../../../support/pages/ClientPage";
import { invoice } from "../../../support/pages/InvoicePage";
describe('Framework Test Suite', () => {
	
	let gd;

  before('Add all data to be used while testing', () => {
    cy.fixture("billomat-frontend-prod-data/prod-data").then((data) => {
      gd = data;
    });
	

	});
	
	it(`Should able to create new invoice with existing client`, () => {
		
    login.logInfo(gd)
		login.navigateToUrl('/app');
		
		login.email(gd.login.email);
		login.password(gd.login.password);
		login.clickloginBtn();

		
			commonitem.selectmenuitem('invoices');
			commonitem.clickshortcutItem('Neue Rechnung');

			client.searchviaClientNumberandClick(gd.client.clientNumber);
			
			invoice.description(gd.invoice.description);
			invoice.clickactionbutton("Speichern");
			invoice.verifyStatus('Entwurf');
			invoice.clickactionItem('Abschließen');
			invoice.clickactionItem('Zustimmen');
			invoice.verifyStatus('Bezahlt');

	
	})
	
	after('logout',()=>{

		login.navigateToUrl('/app/auth/logout')

	})
	
});

