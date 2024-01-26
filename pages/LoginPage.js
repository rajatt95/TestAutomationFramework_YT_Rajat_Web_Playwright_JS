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

        console.log('Filling ' + username + ' in Username textBox');
        await this.textbox_username.fill(username);    

        console.log('Filling ' + password + ' in Password textBox');
        await this.textbox_password.fill(password);
       
        console.log('Clicking on Login button');
        await this.button_login.click();
    }


    async get_message_error_not_match(){
        return this.message_error_not_match;
    }

}

export default LoginPage;