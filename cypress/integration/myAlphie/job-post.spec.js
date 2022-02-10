/// <reference types="cypress" />

let time = Date();
let current_time = time.toString()
describe("Test Jobs Page", () => {
    
    

    it("Should visit jobs page", () => {
        cy.visit('/post-job')
    })

    it("Should fill in Job Name", () => {
        // Get Address Input Field
        cy.get('form > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #title')
        .type(current_time)
    })

    it("Should Select address from dropdown", () => {
        cy.get(".MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd" )

    })
})