import {expect } from '@playwright/test';

class VerificationManager{

    async elementContainsText(targetElement, expectedText){
        console.log("Asserts that an element contains the expected text.")
        await expect(await (targetElement)).toContainText(expectedText)   
    }

    async elementHasText(targetElement, expectedText){
        console.log("Asserts that an element has the expected text.")
        await expect(await (targetElement)).toHaveText(expectedText)
    }

    async elementIsVisible(targetElement){
        console.log("Asserts that an element is visible.")
        await expect(await (targetElement)).toBeVisible()
    }

    async elementHasAttributeAndHasValue(targetElement, attribute, attributeValue){
        console.log("Asserts that an element has a specific attribute with the expected value.")
        await expect(await (targetElement)).toHaveAttribute(attribute, attributeValue)
    }

}

export default new VerificationManager;