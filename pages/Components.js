class Components{
    
    // Elements
    
    constructor(page){
        this.page = page

        // Header
        this.header_logo_swag_labs = page.locator('.app_logo')

        // Footer
        this.footer_msg_copyright = page.locator('.footer_copy')
        this.footer_link_linkedin = page.getByRole('link', { name: 'LinkedIn' })

        // Side-Panel
    }

    // Operations/Methods

    // Header
    async get_header_logo_swag_labs(){
        return this.header_logo_swag_labs;
    }

    // Footer
    async get_footer_msg_copyright(){
        return this.footer_msg_copyright;
    }

    async get_footer_link_linkedin(){
        return this.footer_link_linkedin;
    }


    // Side-Panel


}

export default Components;