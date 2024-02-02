
import BasePage from "./basePage";


/**
 * Class representing a Navigation bar menu item and its action.
 * @extends BasePage
 */

class CommonItemPage extends BasePage
 { 


/**
 * Function to  select menu item from  page.
 * @property {String} item Menu item to be selected
 * @example
 * commonItem.selectmenuitem('invoices');
*/
selectmenuitem(item){
	cy.get(`[href="/app/beta/${item}"]`).click();
	
};

/**
 * Function to  click item from the shortcut.
 * @property {String} shortcutItem shortcut item which needs to be entered.
 * @example
 * Login.shortcutItem('Neue Rechnung');
*/
clickshortcutItem(shortcutItem){

	switch (shortcutItem) {

		case 'Neue Rechnung'||'New Invoice':
			cy.contains('Neue Rechnung').click();
			break;
		case 'Neue Abo-Rechnung'||'Recurring Invoices':
				cy.contains('Neue Rechnung').click();
				
				break;
	
		default:
			break;
	}
	
};
    
}

export const commonitem = new CommonItemPage();