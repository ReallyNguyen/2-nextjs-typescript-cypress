context('Navigation', () => {
    beforeEach(function () {
        console.log("Starting Navigation Test");
    })

    it('Should navigate to the about page', () => {
        // starting at index
        cy.visit('http://localhost:3000')

        // find link with a href attribute containing about and click it
        cy.get('a[href*="about"]').click();

        // the url should include /about
        cy.url().should('include', '/about')

        // The new page should contain a h1 with "About page"
        cy.get('h1').contains('About Page')
    })
})

export { }