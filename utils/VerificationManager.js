// Importing necessary modules for Playwright test
import { expect } from '@playwright/test';

/**
 * VerificationManager class provides methods for asserting different conditions.
 */
class VerificationManager{

    /**
     * Asserts that an element contains the expected text.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} expectedText - The expected text to be contained in the element.
     * 
     * @example
     * // Example usage:
     * await verificationManager.elementContainsText(page.locator('h1'), 'Hello, World!');
     */
    async elementContainsText(targetElement, expectedText){
        console.log(`Asserts that an element contains the expected text '${expectedText}'.`)
        expect(await (targetElement)).toContainText(expectedText)   
    }

    /**
     * Asserts that an element has the expected text.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} expectedText - The expected text of the element.
     * 
     * @example
     * // Example usage:
     * await verificationManager.elementHasText(page.locator('p'), 'This is a paragraph.');
     */
    async elementHasText(targetElement, expectedText){
        console.log(`Asserts that an element has the expected text '${expectedText}'.`)
        expect(await (targetElement)).toHaveText(expectedText)
    }

    /**
     * Asserts that an element is visible.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} targetElementName - The name or identifier of the target element.
     *  
     * @example
     * // Example usage:
     * await verificationManager.elementIsVisible(page.locator('#submit-button'), 'Submit Button');
     *
     */
    async elementIsVisible(targetElement, targetElementName){
        console.log(`Asserts that '${targetElementName}' is visible.`)
        expect(await (targetElement)).toBeVisible()
    }

    /**
     * Asserts that an element is not visible.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} targetElementName - The name or identifier of the target element.
     *  
     * @example
     * // Example usage:
     * await verificationManager.elementIsNotVisible(page.locator('#submit-button'), 'Submit Button');
     *
     */
    async elementIsNotVisible(targetElement, targetElementName){
        console.log(`Asserts that '${targetElementName}' is not visible.`)
        expect(await (targetElement)).toBeHidden()
    }

    /**
     * Asserts that an element has a specific attribute with the expected value.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} targetElementName - The name or identifier of the target element.
     * @param {string} attribute - The attribute to check.
     * @param {string} attributeValue - The expected value of the attribute.
     * 
     *  * @example
     * // Example usage:
     * await verificationManager.elementHasAttributeAndHasValue(
     *     page.locator('input[type="text"]'),
     *     'Text Input',
     *     'placeholder',
     *     'Enter your name'
     * );
     */
    async elementHasAttributeAndHasValue(targetElement, targetElementName, attribute, attributeValue){
        console.log(`Asserts that '${targetElementName}' has a specific attribute '${attribute}' with the expected value '${attributeValue}'.`)
        expect(await (targetElement)).toHaveAttribute(attribute, attributeValue)
    }

    /**
     * Asserts that the current page URL contains the expected substring.
     * @param {Page} page - The Playwright page object.
     * @param {string} expectedUrl - The substring to check for in the page URL.
     * @returns {Promise<void>} - A Promise that resolves when the assertion is complete.
     * 
     * @example
     * // Example usage:
     * await verificationManager.pageContainsUrl(page, 'example');
     */
    async pageContainsUrl(page, expectedUrl){    
        const currentPageTitle = await page.url()       
        console.log(`Asserts that the current page URL '${currentPageTitle}' contains the expected substring '${expectedUrl}'.`)
        expect(currentPageTitle).toContain(expectedUrl);
    }

    /**
     * Asserts that the current page URL matches the expected URL.
     * @param {Page} page - The Playwright page object.
     * @param {string} expectedUrl - The expected URL to match.
     * @returns {Promise<void>} - A Promise that resolves when the assertion is complete.
     *
     * @example
     * // Example usage:
     * await verificationManager.pageHasUrl(page, 'https://example.com');
     */
    async pageHasUrl(page, expectedUrl){
        console.log(`Asserts that the current page URL matches the expected substring '${expectedUrl}'.`)
        expect(page).toHaveURL(expectedUrl)
    }   

    /**
     * Asserts that the current page Title contains the expected substring.
     * @param {Page} page - The Playwright page object.
     * @param {string} expectedTitle - The expected substring to check for in the page title.
     * @returns {Promise<void>} - A Promise that resolves when the assertion is complete.
     *
     * @example
     * // Example usage:
     * await verificationManager.pageContainsTitle(page, 'Example Title');
     */
    async pageContainsTitle(page, expectedTitle){    
        const currentPageTitle = await page.title()    
        console.log(`Asserts that the current page Title '${currentPageTitle}' contains the expected substring '${expectedTitle}'.`)
        expect(currentPageTitle).toContain(expectedTitle);
    }

    /**
     * Asserts that the current page Title matches the expected substring.
     * @param {Page} page - The Playwright page object.
     * @param {string} expectedTitle - The expected substring to match with the page title.
     * @returns {Promise<void>} - A Promise that resolves when the assertion is complete.
     *
     * @example
     * // Example usage:
     * await verificationManager.pageHasTitle(page, 'Example Title');
     */
    async pageHasTitle(page, expectedTitle){        
        console.log(`Asserts that the current page Title matches the expected substring '${expectedTitle}'.`)
        expect(page).toHaveTitle(expectedTitle)
    }

}


/**
 * Exports the VerificationManager class as the default export of this module.
 * @module VerificationManager
 */
export default new VerificationManager;