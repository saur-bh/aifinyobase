// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { login } from "../support/pages/LoginPage";
Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes('handleLogin')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})


Cypress.Commands.add('loginToApp', () => { 
    login.navigateToUrl(`/app`);
		login.email(Cypress.env('username'));
		login.password(Cypress.env('password'));
		login.clickloginBtn();
 })


 Cypress.on("log:changed", (log, interactive) => {
  if (log.displayName !== "fetch" && log.displayName !== "xhr") return

  const logs = window.top.document.querySelectorAll("li.command-name-request");
  if (logs.length) {
    const last = [...logs][logs.length - 1];
    last.remove();
  }
});