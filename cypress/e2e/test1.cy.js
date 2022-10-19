/// <reference types="cypress"/>


// we write our test inside it block
it('Google search', ()=>{
    cy.visit('https://google.com' )

    cy.get('.gLFyf').type('automation step by step{Enter}')
    // cy.contains('Google Search').click()
})