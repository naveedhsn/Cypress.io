/// <reference types = "cypress"/>
//For report: https://www.youtube.com/watch?v=J9AHVKNDkDU&ab_channel=AutomationStepbyStep 
describe('Cypress.io Feature#1', function () {
    it('Feature', function () {
        cy.visit('https://www.cypress.io/features')
    })

    it ('Scroll To Footer: Section By Section', function(){
        cy.get('.TestRunnerGui-sc-1bdra1y-2').scrollIntoView()
        cy.wait(2000)
        cy.get('.FeaturesList-sc-6bwsh3-0').scrollIntoView()
        cy.wait(2000)
        cy.get('.styled__Wrapper-sc-5ujzgx-0').scrollIntoView()
        cy.wait(2000)
        cy.get('main > :nth-child(5)').scrollIntoView()
        cy.wait(2000)
        cy.get('main > :nth-child(6)').scrollIntoView()
        cy.wait(2000)
        cy.get('main > :nth-child(7)').scrollIntoView()
        cy.wait(2000)
        cy.get('.Footer-sc-1b1goem-0').scrollIntoView()
        cy.wait(2000)
    })

     it ('Assertion: Text', function(){
         cy.get('h1').should('contain', 'A test runner built for humans.') //section_01
         cy.get('h2').should('contain', 'Cypress makes these 4 tasks amazingly simple:') //section_02
         cy.get('h3').should('contain', 'Setting up tests') //section_03
         cy.get('h3').should('contain', 'Writing tests') //section_04
         cy.get('h3').should('contain', 'Running tests') //section_05
         cy.get('h3').should('contain', 'Debugging') //section_06
         cy.get('h2').should('contain', 'naveed') //section_07
         cy.get('h2').should('contain', 'Supported Browsers') //section_08
         cy.get('h2').should('contain', 'How is this possible?') //section_09
         cy.get('h2').should('contain', 'Ready to try Cypress?') //section_10
         cy.get('h3').should('contain', 'Read our docs') //section_11
         cy.get('h5').should('contain', 'Get Started') //section_12
     })

    it ('Assertion: Button', function(){
        cy.get('a').should('contain', 'Sign up')
        cy.get('a').should('contain', 'Read Cross-Browser Testing Guide')
        cy.get('a').should('contain', 'Learn about how Cypress works')
        cy.get('button').should('contain', 'npm install cypress')
        cy.get('a').should('contain', 'Terms of Use')
        cy.get('a').should('contain', 'Privacy')
    })
})