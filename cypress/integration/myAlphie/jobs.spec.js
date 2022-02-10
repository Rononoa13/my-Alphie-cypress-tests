/// <reference types="cypress" />

describe("Test Jobs Page", () => {

    it("Should visit jobs page", () => {
        cy.visit('/jobs')
    })

    it("Checks the current job page", () => {
        cy.get('.jss50').contains('My Jobs')
    })

})