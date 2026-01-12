// Importing necessary modules for Playwright test
const { test } = require('@playwright/test');

// Importing page objects
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import Components from '../pages/Components';

// Importing utilities
import verificationUtils from '../utils/VerificationUtils';
import tagUtils from '../utils/TagUtils';

// Loading login credentials from JSON file
const loginCredentials = require('../test-data/login_credentials.json');  

// Extracting credentials for both valid and invalid cases
const {
  credentials_1: { valid_username, valid_password },
  credentials_2: { invalid_username, invalid_password }
} = loginCredentials.data;

/**
 * Test suite for Sauce Demo login functionality.
 */
test.describe('[Login]', () => {

  /**
   * Before each test, navigate to the application homepage.
   */
  test.beforeEach(async({ page }) =>{
    // Navigate to application
    await page.goto('/')  
  })

  /**
   * Test case: Login with valid credentials. Validate that User is able to login using valid credentials.
   * @tags {regression, sanity, bvt}
   */
  test('Login with valid credentials. Validate that User is able to login using valid credentials.', {tag: [tagUtils.REGRESSION, tagUtils.SANITY, tagUtils.BVT ]}, async ({ page }) => {
   
    // Fill valid credentials and Login 
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(valid_username, valid_password)

    // Assertions for successful login
  
    // Verify the heading on the Products page
    const productsPage = new ProductsPage(page)
    verificationUtils.elementHasText(productsPage.heading_products, 'Products')
    
    // Verify the logo on the header
    const components = new Components(page)
    verificationUtils.elementHasText(components.header_logo_swag_labs, 'Swag Labs')
  
    // Verify the copyright message in the footer
    verificationUtils.elementContainsText(components.footer_msg_copyright, ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
        
    // Verify that LinkedIn link in the footer is present
    verificationUtils.elementIsVisible(components.footer_link_linkedin, "Footer: LinkedIn link")
    
    // Verify the href attribute and value for the LinkedIn link in the footer
    verificationUtils.elementHasAttributeAndHasValue(components.footer_link_linkedin, "Footer: LinkedIn link", 'href', 'https://www.linkedin.com/company/sauce-labs/')    
  
  });
  
  /**
   * Test case: Login with invalid credentials. Validate that User is unable to login using invalid credentials.
   * @tags {regression, sanity}
   */
  test('Login with invalid credentials. Validate that User is unable to login using invalid credentials.', {tag: [tagUtils.REGRESSION, tagUtils.SANITY ]}, async ({ page }) => {
      
    // Fill invalid credentials and Login 
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(invalid_username, invalid_password)
  
    // Verify the error message for Username and Password not match with any User
    verificationUtils.elementContainsText(loginPage.message_error_not_match, 'Username and password do not match')
  });
    

});