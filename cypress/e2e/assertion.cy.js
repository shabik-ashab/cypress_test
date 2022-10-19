


it('assertion', ()=> {
    cy.visit('https://example.cypress.io')

    // implicit assertion
    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.class', 'query-btn')
    .and('be.visible')
    .and('be.enabled')

    // should is a asertion
    // if we use and it will follow prev assertion
    // should contain,have,be,equal

    // we can also check
    // have.text
    // have.html

    // be.visible, selected, disabled, focused = have.focous

    // chaining assertion with add


})