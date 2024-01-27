/**
 * CartPage class represents the page displaying a list of products added in cart.
 * @class
 */
class CartPage{
    
    // Elements
     /**
     * Initializes the CartPage instance with page elements.
     *
     * @param {Object} page - The Playwright page object.
     */
    constructor(page){
        this.page = page
        this.heading_your_cart = page.locator('.title')
    }

    // Operations/Methods
    /**
     * Retrieves the heading element displaying your cart.
     * @returns {Locator} - The locator for the heading element.
     * 
     * @example
     * const cartPage = new CartPage(page);
     * const headingLocator = await cartPage.get_heading_your_cart();
     */
    async get_heading_your_cart(){
        return this.heading_your_cart;
    }

}

/**
 * Exports the CartPage class as the default export of this module.
 * @module CartPage
 */
export default CartPage;