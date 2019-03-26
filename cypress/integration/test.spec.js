///<reference types="Cypress" />

describe('my first test', () => {

    it('visit taqelah meetup', () => {
        cy.visit('http://google.com')
        cy.get('.gLFyf').type('taqelah')
        cy.contains("Google Search").click()
        cy.contains(/Meetup/).click()
        // cy.wait(3000)
        // cy.contains('8th TAQELAH Meetup').click()
        cy.get('.groupHomeHeader-groupNameLink').should('have.text',"TAQELAH")
    })
    
    
})