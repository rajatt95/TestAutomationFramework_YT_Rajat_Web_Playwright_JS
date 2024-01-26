// Importing necessary modules for Playwright test
import {expect } from '@playwright/test';

/**
 * VerificationManager class provides methods for asserting different conditions on web elements.
 */
class VerificationManager{

    /**
     * Asserts that an element contains the expected text.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} expectedText - The expected text to be contained in the element.
     * @example
     * // Example usage:
     * await verificationManager.elementContainsText(page.locator('h1'), 'Hello, World!');
     */
    async elementContainsText(targetElement, expectedText){
        console.log("Asserts that an element contains the expected text.")
        await expect(await (targetElement)).toContainText(expectedText)   
    }

    /**
     * Asserts that an element has the expected text.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} expectedText - The expected text of the element.
     * @example
     * // Example usage:
     * await verificationManager.elementHasText(page.locator('p'), 'This is a paragraph.');
     */
    async elementHasText(targetElement, expectedText){
        console.log("Asserts that an element has the expected text.")
        await expect(await (targetElement)).toHaveText(expectedText)
    }

    /**
     * Asserts that an element is visible.
     * @param {ElementHandle} targetElement - The target element to check.
     * @example
     * // Example usage:
     * await verificationManager.elementIsVisible(page.locator('#submit-button'));
     */
    async elementIsVisible(targetElement){
        console.log("Asserts that an element is visible.")
        await expect(await (targetElement)).toBeVisible()
    }

    /**
     * Asserts that an element has a specific attribute with the expected value.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} attribute - The attribute to check.
     * @param {string} attributeValue - The expected value of the attribute.
     *  * @example
     * // Example usage:
     * await verificationManager.elementHasAttributeAndHasValue(
     *     page.locator('input[type="text"]'),
     *     'placeholder',
     *     'Enter your name'
     * );
     */
    async elementHasAttributeAndHasValue(targetElement, attribute, attributeValue){
        console.log("Asserts that an element has a specific attribute with the expected value.")
        await expect(await (targetElement)).toHaveAttribute(attribute, attributeValue)
    }

}


/**
 * Exports the VerificationManager class as the default export of this module.
 * @module VerificationManager
 */
export default new VerificationManager;