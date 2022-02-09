describe("Test Properties Page", () => {

    it("should visit login page", () => {

        cy.visit('/')

    })

    it("should open properties page", () => {
        cy.get('.MuiList-root > :nth-child(2) > .MuiButtonBase-root')
            .click()
    })

    it("should contain Properties title", () => {
        cy.get('.jss55').contains('My Properties')
    })

    it('should click "Post a Property +" button', () => {
        cy.get('.jss57 > .MuiButtonBase-root').click()
    })
})

describe("Post a new Property", () => {

    it('Check Post New Property Page', () => {
        cy.wait(500)
        cy.get('.MuiToolbar-root')
            .contains('Post New Property')
    })

    it('Should input Property Name', () => {
        cy.wait(500)
        cy.get('#name').type("Random test")
    })

    it('Should select property types from the list.', () => {
        // let propertyTypes = ["LOFT", "APARTMENT", "HOUSE"]
        
        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="HOUSE"]').click()

        // cy.get(`[data-value=${propertyTypes}]`).click()
        // selects the whole properties types
        // cy.get('.MuiPaper-root > .MuiList-root')
    })
})


