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

        // Footer
        this.footer_msg_copyright = page.locator('.footer_copy')
        this.footer_link_linkedin = page.getByRole('link', { name: 'LinkedIn' })

        // Side-Panel
        // Add any side-panel elements if needed
    }

    // Operations/Methods

    // Header

    /**
     * Retrieves the locator for the Swag Labs logo in the header.
     * @returns {Locator} - The locator for the logo element.
     * @example
     * const components = new Components(page);
     * const logoLocator = await components.get_header_logo_swag_labs();
     */
    async get_header_logo_swag_labs(){
        return this.header_logo_swag_labs;
    }

    // Footer

    /**
     * Retrieves the locator for the copyright message in the footer.
     * @returns {Locator} - The locator for the copyright message element.
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
     * @example
     * const components = new Components(page);
     * const linkedinLocator = await components.get_footer_link_linkedin();
     */
    async get_footer_link_linkedin(){
        return this.footer_link_linkedin;
    }


    // Side-Panel
    // Add any side-panel methods if needed

}

/**
 * Exports the Components class as the default export of this module.
 * @module Components
 */
export default Components;