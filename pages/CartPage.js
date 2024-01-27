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
    
}

/**
 * Exports the CartPage class as the default export of this module.
 * @module CartPage
 */
export default CartPage;