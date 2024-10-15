import BasePage from "./BasePage";

/**
 * Class representing a Navigation bar menu item and its action.
 * @extends BasePage
 */

class CommonItemPage extends BasePage {
  /**
   * Function to  select menu item from  page.
   * @property {String} item Menu item to be selected
   * @example
   * commonItem.selectmenuitem('invoices');
   */
  selectmenuitem(item) {
    cy.get(`[href="/app/beta/${item}"]`).should("be.visible").click();
  }

  /**
   * Function to  click item from the shortcut.
   * @property {String} shortcutItem shortcut item which needs to be entered.
   * @example
   * Login.shortcutItem('Neue Rechnung');
   */
  clickshortcutItem(shortcutItem) {
    switch (shortcutItem) {
      case "Neue Rechnung":
      case "New Invoice":
        cy.get(".invoices").find("button").first().click();
        break;
      case "Neue Abo-Rechnung":
      case "Recurring Invoices":
        cy.get(".recurrings").find("button").first().click();
        break;
      case "Lieferantenrechnung":
      case "supplierinvoice":
        cy.get(".finance").find("button").first().click();
        break;

      default:
        break;
    }
  }
}

export const commonitem = new CommonItemPage();
