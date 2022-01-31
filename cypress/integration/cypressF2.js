/// <reference types = "cypress"/>
//For report: https://www.youtube.com/watch?v=J9AHVKNDkDU&ab_channel=AutomationStepbyStep 

describe('Cypress.io Feature#2', function () {
    it('Whats New', function () {
        cy.visit('https://www.cypress.io/whats-new')
    })

    it ('Subscribe', function(){
        cy.get('.container > .Link-sc-5cc5in-0').click()
    })

    it ('Happy Path Test (valid email)', function(){
        cy.get('#input-footer-email').type('naveed@gmail.com')
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
    })

    it ('Negative-1 (Invalid email)', function(){
        cy.reload()
        cy.get('.container > .Link-sc-5cc5in-0').click()
        cy.get('#input-footer-email').type('naveed_gmail.com')
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
        cy.wait(4000)
    })

    it ('Negative-2 (Invalid email)', function(){
        cy.get('#input-footer-email').clear().type('naveed@@@gmail.com')
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
        cy.wait(4000)
    })

    it ('Negative-3 (Invalid email)', function(){
        cy.get('#input-footer-email').clear().type('n@veed@gmail.com')
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
        cy.wait(4000)
    })

    it ('Negative-4 (Invalid email)', function(){
        cy.get('#input-footer-email').clear().type('#@%^%#$@#$@#.com')
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
        cy.wait(4000)
    })
    
    it ('Negative-5 (Invalid email)', function(){
        cy.get('#input-footer-email').clear().type('naveed@example...com')
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
        cy.wait(4000)
    })

    it ('Negative-6 (Invalid email)', function(){
        cy.get('#input-footer-email').clear().type('@example.com')
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
        cy.wait(4000)
    })

    it ('Negative-7 (Invalid email)', function(){
        cy.get('#input-footer-email').clear().type('naveed@111.222.333.44444') //It should not be accepted
        cy.wait(2000)
        cy.get('.styled__Submit-sc-10l91w3-12').click()
        cy.wait(4000)
    })
})