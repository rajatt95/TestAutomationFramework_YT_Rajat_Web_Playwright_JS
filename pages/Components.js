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

        // Side-Panel
        this.side_panel_icon_expand = page.locator('#react-burger-menu-btn')
        this.side_panel_icon_cross = page.locator('#react-burger-cross-btn')
    }

    // Operations/Methods

    // Header

    /**
     * Retrieves the locator for the Swag Labs logo in the header.
     * @returns {Locator} - The locator for the logo element.
     * 
     * @example
     * const components = new Components(page);
     * const logoLocator = await components.get_header_logo_swag_labs();
     */
    async get_header_logo_swag_labs(){
        return this.header_logo_swag_labs;
    }

    /**
     * Retrieves the locator for the cart icon in the header.
     * @returns {Locator} - The locator for the cart icon element.
     * 
     * @example
     * const components = new Components(page);
     * const cartIconLocator = await components.get_header_icon_cart();
     */
    async get_header_icon_cart(){
        return this.header_icon_cart;
    }


    /**
     * Clicks on the cart icon in the header.
     * 
     * @example
     * const components = new Components(page);
     * await components.click_header_icon_cart();
     */
    async click_header_icon_cart(){
        await basePage.clickOnWebElement(this.header_icon_cart, "Cart icon")
    }

    


    // Footer

    /**
     * Retrieves the locator for the copyright message in the footer.
     * @returns {Locator} - The locator for the copyright message element.
     * 
     * @example
     * const components = new Components(page);
     * const copyrightLocator = await components.get_footer_msg_copyright();
     */
    async get_footer_msg_copyright(){
        return this.footer_msg_copyright;
    }

    /**
     * Retrieves the link locator for the LinkedIn link in the footer.
     * @returns {Locator} - The locator for the LinkedIn link element.
     * 
     * @example
     * const components = new Components(page);
     * const linkedinLocator = await components.get_footer_link_linkedin();
     */
    async get_footer_link_linkedin(){
        return this.footer_link_linkedin;
    }


    // Side-Panel

    /**
     * Retrieves the locator for the expand icon in the side panel.
     * @returns {Locator} - The locator for the side panel expand icon element.
     * 
     * @example
     * const components = new Components(page);
     * const expandIconLocator = await components.get_side_panel_icon_expand();
     */
    async get_side_panel_icon_expand(){
        return this.side_panel_icon_expand;
    }


}

/**
 * Exports the Components class as the default export of this module.
 * @module Components
 */
export default Components;