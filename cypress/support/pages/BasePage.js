/**
 * Class representing a BasePage.
 */

class BasePage { 
	/**
     * Function to make pause.
     * @property {Number} ms : milisecond 10000 = 1 sec
     * @example
     * BasePage.pause(10000);
    */
	pause(ms) {
		cy.wait(ms);
	}
    
	/**
     * Function to log info message.
     * @property {String} message : Message to be log in console.
     * @example
     * BasePage.logInfo("This is message in console.");
    */
	logInfo(message) {
		cy.log(message);
	}
    
	/**
     * Function to set viewport as iPhone-x,ipad-2, macbook-13 and macbook-15
     * @property {String} viewPort : can be iPhone-x,ipad-2, macbook-13 and macbook-15
     * @example
     * BasePage.setMobileViewport();
    */
	setMobileViewport(viewPort) {
		cy.viewport(viewPort);
	}
    
	/**
     * Function to navigate url provided .
     * @property {String} visitUrl -endpoint to visit keep '/' for base url
     * @example
     * BasePage.naviagteToUrL("/")
    */
    
	navigateToUrl(visitUrl) {
		cy.visit(visitUrl);
	}
    
	/**
     * Function to clear cookies.
     * @example
     * BasePage.clearCookies();
    */
	 clearCookies(){
		cy.clearCookies();
	}

	/**
     * Function to verify title of the page.
     * @property {String} title title to be verified
     * @example
     * BasePage.verifyTitleOfPage('pflegia');
    */
	 verifyTitleOfPage(title){
		cy.title().should('include', title);
	}
}

export default BasePage;
