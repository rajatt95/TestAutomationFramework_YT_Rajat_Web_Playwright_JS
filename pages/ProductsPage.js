class ProductsPage{
    
    // Elements
    constructor(page){
        this.page = page
        this.heading_products = page.locator('.title')
    }

    // Operations/Methods

    async get_heading_products(){
        return this.heading_products;
    }

}

export default ProductsPage;