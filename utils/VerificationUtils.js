// Importing necessary modules for Playwright test
import { expect } from '@playwright/test';

/**
 * VerificationUtils class provides methods for asserting different conditions.
 */
class VerificationUtils{

    /**
     * Asserts that an element contains the expected text.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} expectedText - The expected text to be contained in the element.
     * 
     * @example
     * // Example usage:
     * verificationUtils.elementContainsText(page.locator('h1'), 'Hello, World!');
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
     * verificationUtils.elementHasText(page.locator('p'), 'This is a paragraph.');
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
     * verificationUtils.elementIsVisible(page.locator('#submit-button'), 'Submit Button');
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
     * verificationUtils.elementIsNotVisible(page.locator('#submit-button'), 'Submit Button');
     *
     */
    async elementIsNotVisible(targetElement, targetElementName){
        console.log(`Asserts that '${targetElementName}' is not visible.`)
        expect(await (targetElement)).toBeHidden()
    }

    /**
     *  Asserts the count of visible elements.
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} targetElementName - The name or identifier of the target element.
     * @param {string} expectedCount - The expected count of elements.
     *  
     * @example
     * // Example usage:
     * verificationUtils.elementsCount(page.locator('#submit-button'), 'Submit Button', 2);
     *
     */
    async elementsCount(targetElement, targetElementName, expectedCount){
        if(expectedCount == 1){
            console.log(`Asserts that ${expectedCount} '${targetElementName}' is visible.`);
        }else{
            console.log(`Asserts that ${expectedCount} '${targetElementName}' are visible.`);
        }
        
        expect(await (targetElement)).toHaveCount(expectedCount)
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
     * verificationUtils.elementHasAttributeAndHasValue(
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
     * Asserts that an element has a specific CSS property with the expected value.
     *
     * @param {ElementHandle} targetElement - The target element to check.
     * @param {string} targetElementName - The name or identifier of the target element.
     * @param {string} property - The CSS property to check.
     * @param {string} propertyValue - The expected value of the CSS property.
     * 
     * @example
     * // Example usage:
     * await verificationUtils.elementHasCSSPropertyAndHasValue(
     *   page.locator('div'),
     *   'Div Element',
     *   'color',
     *   'red'
     * );
     */
    async elementHasCSSPropertyAndHasValue(targetElement, targetElementName, property, propertyValue){
        console.log(`Asserts that '${targetElementName}' has a specific CSS property '${property}' with the expected value '${propertyValue}'.`)
        expect(await (targetElement)).toHaveCSS(property, propertyValue)
    }

    /**
     * Asserts that the current page URL contains the expected substring.
     * @param {Page} page - The Playwright page object.
     * @param {string} expectedUrl - The substring to check for in the page URL.
     * @returns {Promise<void>} - A Promise that resolves when the assertion is complete.
     * 
     * @example
     * // Example usage:
     * verificationUtils.pageContainsUrl(page, 'example');
     */
    async pageContainsUrl(page, expectedUrl){    
        const currentPageUrl = await page.url()       
        console.log(`Asserts that the current page URL '${currentPageUrl}' contains the expected substring '${expectedUrl}'.`)
        expect(currentPageUrl).toContain(expectedUrl);
    }

    /**
     * Asserts that the current page URL matches the expected URL.
     * @param {Page} page - The Playwright page object.
     * @param {string} expectedUrl - The expected URL to match.
     * @returns {Promise<void>} - A Promise that resolves when the assertion is complete.
     *
     * @example
     * // Example usage:
     * verificationUtils.pageHasUrl(page, 'https://example.com');
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
     * verificationUtils.pageContainsTitle(page, 'Example Title');
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
     * verificationUtils.pageHasTitle(page, 'Example Title');
     */
    async pageHasTitle(page, expectedTitle){        
        console.log(`Asserts that the current page Title matches the expected substring '${expectedTitle}'.`)
        expect(page).toHaveTitle(expectedTitle)
    }

}


/**
 * Exports the VerificationUtils class as the default export of this module.
 * @module VerificationUtils
 */
export default new VerificationUtils;