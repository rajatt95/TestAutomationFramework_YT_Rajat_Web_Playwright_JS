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
     * 
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
     * @param {string} textboxName - The name or description of the text box.
     * @returns {Promise<void>} - A Promise that resolves when the fill operation is completed.
     * 
     * @example
     * const basePage = new BasePage();
     * const usernameInput = //... obtain the ElementHandle for the username input.
     * await basePage.fillTextBox(usernameInput, 'testuser', 'Username Input');
     */
    async fillTextBox(element, value, textboxName){
        console.log(`Filling '${value}' in '${textboxName}' textbox.`);
        await element.fill(value);
    }

    /**
     * Mouse hover on a web element.
     *
     * @param {ElementHandle} element - The web element to hover over.
     * @param {string} elementName - The name or description of the web element.
     * @returns {Promise<void>} - A Promise that resolves when the hover operation is completed.
     * 
     * @example
     * const basePage = new BasePage();
     * const someElement = //... obtain the ElementHandle for some element.
     * await basePage.mouseHoverOnWebElement(someElement, 'Some Element');
     */
    async mouseHoverOnWebElement(element, elementName){
        console.log(`Mouse Hover on '${elementName}'.`);
        await element.hover()
    }

}

/**
 * Exports the BasePage class as the default export of this module.
 * @module BasePage
 */
export default BasePage;