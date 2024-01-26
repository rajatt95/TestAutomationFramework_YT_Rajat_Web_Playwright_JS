class BasePage{

    async clickOnWebElement(element, elementName){
        console.log(`Clicking on '${elementName}'.`);
        await element.click()
    }

    async fillTextBox(element, value, textbox_name){
        console.log(`Filling '${value}' in '${textbox_name}' textbox.`);
        await element.fill(value);
    }

}

export default BasePage;