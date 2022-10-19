
it('assertion', ()=> {
    cy.visit('https://example.cypress.io')

    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class', 'query-btn')

    // should contain,have,be

    // we can also check
    // have.text
    // have.html

    // 

})