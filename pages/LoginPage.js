import BasePage from "./BasePage"

class LoginPage{
    
    // Elements
    constructor(page){
        this.page = page
        this.textbox_username = page.locator('[data-test="username"]')
        this.textbox_password = page.locator('[data-test="password"]')
        this.button_login = page.locator('[data-test="login-button"]')
        this.message_error_not_match = page.locator("//h3[contains(text(),'do not match')]")
    }

    // Operations/Methods
    async loginToApplication(username, password){
        const basePage = new BasePage();
        await basePage.fillTextBox(this.textbox_username, username, "Username")
        await basePage.fillTextBox(this.textbox_password, password, "Password")
        await basePage.clickOnWebElement(this.button_login, "Login button")
    }


    async get_message_error_not_match(){
        return this.message_error_not_match;
    }

}

export default LoginPage;