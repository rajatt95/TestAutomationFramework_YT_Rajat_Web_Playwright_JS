/**
 * BasePage class contains common methods to interact with web elements (common UI interactions).
 * These methods can be re-used across different pages in the application.
 * @class
 */
class BasePage{

    /**
     * Clicks on a web element.
     * @param {ElementHandle} element - The web element to click on.
     * @param {string} elementName - The name or description of the web element.
     * @returns {Promise<void>} - A Promise that resolves when the click operation is completed.
     * @example
     * const basePage = new BasePage();
     * const submitButton = //... obtain the ElementHandle for the submit button.
     * await basePage.clickOnWebElement(submitButton, 'Submit Button');
     */
    async clickOnWebElement(element, elementName){
        console.log(`Clicking on '${elementName}'.`);
        await element.click()
    }

    /**
     * Fills a text box with the provided value.
     * @param {ElementHandle} element - The text box element to fill.
     * @param {string} value - The value to fill in the text box.
     * @param {string} textbox_name - The name or description of the text box.
     * @returns {Promise<void>} - A Promise that resolves when the fill operation is completed.
     * @example
     * const basePage = new BasePage();
     * const usernameInput = //... obtain the ElementHandle for the username input.
     * await basePage.fillTextBox(usernameInput, 'testuser', 'Username Input');
     */
    async fillTextBox(element, value, textbox_name){
        console.log(`Filling '${value}' in '${textbox_name}' textbox.`);
        await element.fill(value);
    }

}

/**
 * Exports the BasePage class as the default export of this module.
 * @module BasePage
 */
export default BasePage;