/**
 * ProductsPage class represents the page displaying a list of products.
 * @class
 */
class ProductsPage{
    
    // Elements
     /**
     * Initializes the ProductsPage instance with page elements.
     *
     * @param {Object} page - The Playwright page object.
     */
    constructor(page){
        this.page = page
        this.heading_products = page.locator('.title')
    }

    // Operations/Methods
    /**
     * Retrieves the heading element displaying products.
     * @returns {Locator} - The locator for the heading element.
     * @example
     * const productsPage = new ProductsPage(page);
     * const headingLocator = await productsPage.get_heading_products();
     */
    async get_heading_products(){
        return this.heading_products;
    }

}

/**
 * Exports the ProductsPage class as the default export of this module.
 * @module ProductsPage
 */
export default ProductsPage;