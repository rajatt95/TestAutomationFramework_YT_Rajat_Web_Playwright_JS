// Importing necessary modules for Playwright test
const { test } = require('@playwright/test');

// Importing page objects
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import Components from '../pages/Components';
import verificationManager from '../utils/VerificationManager';


/**
 * Test suite for Sauce Demo Application Components.
 */
test.describe('[Components]', () => {

  /**
   * Before each test, navigate to the application homepage and login.
   */
  test.beforeEach(async({ page }) =>{
    // Navigate to application and Login
    await page.goto('/')  
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplicationWithValidCredentials()

  })

  /**
   * Test case: [Header] Static Messages. Validate that User is able to see messages in Header component.
   * @tags {regression, sanity}
   */
  test('[Header] Static Messages. Validate that User is able to see messages in Header component. @regression @sanity', async ({ page }) => {
   
    // Verify the side-panel expand icon on the header
    const components = new Components(page)    
    await verificationManager.elementIsVisible(components.side_panel_icon_expand, "Side-Panel: Expand Icon")

    // Verify the logo on the header
    await verificationManager.elementHasText(components.header_logo_swag_labs, 'Swag Labs')
    
    // Verify the cart icon on the header
    await verificationManager.elementIsVisible(components.header_icon_cart, "Header: Cart icon")
      
  });  
  
  
  /**
   * Test case: [Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon.
   * @tags {regression}
   */
  test('[Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon. @regression', async ({ page }) => {
   
    // Click on Cart icon
    const components = new Components(page)
    await components.click_header_icon_cart()

    // Verify that User is on Cart Page
    const cartPage = new CartPage(page)
    await verificationManager.elementHasText(cartPage.heading_your_cart, 'Your Cart')
  
    // Verify the Page URL
    await verificationManager.pageContainsUrl(page, 'cart')
    // await verificationManager.pageHasUrl(page, 'https://www.saucedemo.com/cart.html')
    await verificationManager.pageHasUrl(page, 'cart.html') // baseUrl value will be fetched from playwright.config.js file

    // Verify the Page Title
    // await verificationManager.pageContainsTitle(page, 'Labs')
    await verificationManager.pageHasTitle(page, 'Swag Labs')    

  });  


  /**
   * Test case: [Footer] Static Messages. Validate that User is able to see messages in Footer component.
   * @tags {regression, sanity}
   */
  test('[Footer] Static Messages. Validate that User is able to see messages in Footer component. @regression @sanity', async ({ page }) => {
   
    // Verify the social links icon
    const components = new Components(page)    
    await verificationManager.elementIsVisible(components.footer_link_twitter, "Footer: Twitter link")
    await verificationManager.elementIsVisible(components.footer_link_facebook, "Footer: Facebook link")
    await verificationManager.elementIsVisible(components.footer_link_linkedin, "Footer: LinkedIn link")

    // Verify the copyright message 
    await verificationManager.elementContainsText(components.footer_msg_copyright, '© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
      
  });  
  

  /**
   * Test case: [Footer] Links navigation. Validate that User is able to navigate to social platforms using icons.
   * @tags {regression}
   */
  test('[Footer] Links navigation. Validate that User is able to navigate to social platforms using icons. @regression', async ({ page }) => {
   
    // Verify the social links
    const components = new Components(page)    
    await verificationManager.elementHasAttributeAndHasValue(components.footer_link_twitter, "Footer: Twitter link", "href","https://twitter.com/saucelabs")
    await verificationManager.elementHasAttributeAndHasValue(components.footer_link_facebook, "Footer: Facebook link", "href","https://www.facebook.com/saucelabs")
    await verificationManager.elementHasAttributeAndHasValue(components.footer_link_linkedin, "Footer: LinkedIn link", "href","https://www.linkedin.com/company/sauce-labs/")
      
  });  


});

