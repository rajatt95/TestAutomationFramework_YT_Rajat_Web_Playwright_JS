// Importing the BasePage class
import BasePage from "./BasePage"

// Creating an instance of the BasePage class
const basePage = new BasePage();

/**
 * Components class represents various components on the web page.
 * @class
 */
class Components{
    
    // Elements
    /**
     * Initializes the Components instance with elements.
     *
     * @param {Object} page - The Playwright page object.
     */
    constructor(page){
        this.page = page

        // Header
        this.header_logo_swag_labs = page.locator('.app_logo')
        this.header_icon_cart = page.locator('#shopping_cart_container')

        // Footer
        this.footer_msg_copyright = page.locator('.footer_copy')
        this.footer_link_linkedin = page.getByRole('link', { name: 'LinkedIn' })
        this.footer_link_twitter = page.getByRole('link', { name: 'Twitter' })
        this.footer_link_facebook = page.getByRole('link', { name: 'Facebook' })

        // Side-Panel
        this.side_panel_icon_expand = page.locator('#react-burger-menu-btn')
        this.side_panel_icon_cross = page.locator('#react-burger-cross-btn')

        this.side_panel_links = page.locator("//*[contains(@id,'sidebar_link')]")
        this.side_panel_link_allItems = page.locator('#inventory_sidebar_link')
        this.side_panel_link_about = page.locator('#about_sidebar_link')
        this.side_panel_link_logout = page.locator('#logout_sidebar_link')
        this.side_panel_link_resetAppState = page.locator('#reset_sidebar_link')
        
        
    }

    // Operations/Methods

    // Header

    /**
     * Clicks on the cart icon in the header.
     * 
     * @example
     * const components = new Components(page);
     * await components.click_header_icon_cart();
     */
    async click_header_icon_cart(){
        await basePage.clickOnWebElement(this.header_icon_cart, "Header: Cart icon")
    }


    // Footer
    

    // Side-Panel

    /**
     * Clicks on the expand icon in the side-panel.
     * 
     * @example
     * const components = new Components(page);
     * await components.click_side_panel_icon_expand();
     */
    async click_side_panel_icon_expand(){
        await basePage.clickOnWebElement(this.side_panel_icon_expand, "Side-Panel: Expand icon")
    }

    /**
     * Clicks on the cross icon in the side-panel.
     * 
     * @example
     * const components = new Components(page);
     * await components.click_side_panel_icon_cross();
     */
    async click_side_panel_icon_cross(){
        await basePage.clickOnWebElement(this.side_panel_icon_cross, "Side-Panel: Expand icon")
    }

    /**
     * Clicks on the about link in the side-panel.
     * 
     * @example
     * const components = new Components(page);
     * await components.click_side_panel_link_about();
     */
    async click_side_panel_link_about(){
        await basePage.clickOnWebElement(this.side_panel_link_about, "Side-Panel: About link")
    }


    


}

/**
 * Exports the Components class as the default export of this module.
 * @module Components
 */
export default Components;