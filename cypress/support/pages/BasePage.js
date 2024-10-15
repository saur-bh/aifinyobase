/**
 * Class representing a BasePage.
 */
class BasePage {
  /**
   * Pause execution for a specified time.
   * @param {number} ms - time in milliseconds (10000 = 1 second)
   * @example
   * BasePage.pause(10000);
   */
  pause(ms) {
    cy.wait(ms);
  }

  /**
   * Log an info message to the console.
   * @param {string} message - message to be logged
   * @example
   * BasePage.logInfo("This is a message in the console.");
   */
  logInfo(message) {
    cy.log(message);
  }

  /**
   * Set the viewport to a specific device size.
   * @param {string} viewPort - can be "iPhone-x", "ipad-2", "macbook-13", or "macbook-15"
   * @example
   * BasePage.setMobileViewport("iPhone-x");
   */
  setMobileViewport(viewPort = 'iPhone-x') {
    cy.viewport(viewPort);
  }

  /**
   * Navigate to a URL.
   * @param {string} visitUrl - endpoint to visit (keep '/' for base URL)
   * @example
   * BasePage.navigateToUrl("/");
   */
  navigateToUrl(visitUrl) {
    cy.visit(visitUrl, {
      onBeforeLoad(win) {
        win.localStorage.setItem('i18nextLng', 'en-GB');
      },
    });
  }

  /**
   * Clear cookies.
   * @example
   * BasePage.clearCookies();
   */
  clearCookies() {
    cy.clearCookies();
  }

  /**
   * Verify the title of the page.
   * @param {string} title - title to be verified
   * @example
   * BasePage.verifyTitleOfPage('pflegia');
   */
  verifyTitleOfPage(title) {
    cy.title().should('include', title);
  }
}

export default BasePage;
