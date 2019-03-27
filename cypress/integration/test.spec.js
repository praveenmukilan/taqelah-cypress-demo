///<reference types="Cypress" />
import data from '../fixtures/example.json'

describe('my first test', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('visit taqelah meetup', () => {
        cy.get('.gLFyf').type(data.input_taq)
        cy.contains("Google Search").click()
        cy.contains(/Meetup/).click()
        cy.get('.groupHomeHeader-groupNameLink').should('have.text',"TAQELAH")
    })

    it('visit carousell site', function() {
        cy.get('.gLFyf').type('carousell')
        cy.contains("Google Search").click()
        cy.get('.LC20lb').first().should('contain','Snap to Sell').click()
        cy.url().should('eq','https://sg.carousell.com/')
    })
    
    
})