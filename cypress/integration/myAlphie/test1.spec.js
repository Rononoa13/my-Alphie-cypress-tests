/// <reference types="cypress" />

describe('My First Test', () => {

	after(() => {
		cy.get(':nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root').click()
	})

	it("should visit login page", () => {

		cy.visit('/')

	})

	it("Fill in the credentials", () => {
		// user.json file created in fixtures.
		cy.fixture('user').then(user => {
			cy.get('#ui-sign-in-email-input').type(user.email).type('{enter}')
			cy.get('#ui-sign-in-password-input').type(user.password).type('{enter}')
			cy.wait(5000)
		})

	})



})
