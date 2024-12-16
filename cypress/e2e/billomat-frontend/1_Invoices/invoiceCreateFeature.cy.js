import { login } from '../../../support/pages/LoginPage';
import { commonitem } from '../../../support/pages/CommonItemPage';
import { client } from '../../../support/pages/ClientPage';
import { invoice } from '../../../support/pages/InvoicePage';
import { qase } from 'cypress-qase-reporter/dist/mocha';

const testConfig = {
  environmentId: 'billodev',
  dataFileName: 'billomat-frontend-data/dev-data',
  navigation: {
    invoicesMenuItem: 'invoices',
    newInvoiceShortcut: 'Neue Rechnung',
  },
  clientSearch: {
    searchKey: 'clientNumber',
  },
  invoiceDetails: {
    descriptionKey: 'description',
  },
  invoiceActions: {
    saveButton: 'Save',
    completeButton: 'Complete',
    approveButton: 'Approve',
  },
  invoiceStatus: {
    draft: 'Draft',
    paid: 'Paid',
    open: 'Open'
  },
  logoutUrl: '/app/auth/logout',
};

describe('Framework Test Suite', () => {
  let testData;

  beforeEach('Load test data', () => {
    cy.loginToApp();
    if (Cypress.env('id') === testConfig.environmentId) {
      cy.log(`Using Staging Data file...`);
      cy.fixture(testConfig.dataFileName).then((data) => {
        testData = data;
      });
    } else {
      cy.log(`Using Prod Data file...`);
      cy.fixture(testConfig.dataFileName).then((data) => {
        testData = data;
      });
    }
  });

  qase(
    8,
    it(`Should be able to cancel new invoice creation with existing client `, () => {
      commonitem.selectmenuitem(testConfig.navigation.invoicesMenuItem);
      commonitem.clickshortcutItem(testConfig.navigation.newInvoiceShortcut);

      client.searchviaClientNumberandClick(
        testData.client[testConfig.clientSearch.searchKey],
      );
      invoice.description(
        testData.invoice[testConfig.invoiceDetails.descriptionKey],
      );
      invoice.clickactionbutton(testConfig.invoiceActions.saveButton);
      invoice.verifyStatus(testConfig.invoiceStatus.draft);
      invoice.clickactionItem(testConfig.invoiceActions.completeButton);
      invoice.clickdialogBox(testConfig.invoiceActions.approveButton);
      invoice.verifyStatus(testConfig.invoiceStatus.paid);
    }),
  );

  qase(
    7,
    it(`Should be able to create new invoice with existing client`, () => {
      commonitem.selectmenuitem(testConfig.navigation.invoicesMenuItem);
      commonitem.clickshortcutItem(testConfig.navigation.newInvoiceShortcut);

      client.searchviaClientNumberandClick(
        testData.client[testConfig.clientSearch.searchKey],
      );
      invoice.description(
        testData.invoice[testConfig.invoiceDetails.descriptionKey],
      );
      invoice.fillPositionDetails(1, 'Test Title 1', 'Test Description 1', '10', '119', '19% Tax 19', '1,000.00 €', '1,190.00 €');

      invoice.clickactionbutton(testConfig.invoiceActions.saveButton);
      invoice.verifyStatus(testConfig.invoiceStatus.draft);
      invoice.clickactionItem(testConfig.invoiceActions.completeButton);
      invoice.clickdialogBox(testConfig.invoiceActions.approveButton);
      invoice.verifyStatus(testConfig.invoiceStatus.open);
    }),


  );

  afterEach('logout', () => {
    login.navigateToUrl(testConfig.logoutUrl);
  });

 

});
