// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { PROFILE_URL } from '../constants/url-constants'
import LoginPage from '../page-objects/login-page'
import { AccountHelper } from '../utils/api/data-preparation/account-helper'

beforeEach(function () {
	AccountHelper.generateToken(Cypress.env('username'), Cypress.env('password'))
})

Cypress.Commands.add('logInToApplication', function () {
	// Approach 1: read user from file
	// cy.fixture('valid-account.json').then((user) => {
	// 	LoginPage.navigate()
	// 	cy.login(user.username, user.password)
	// 	cy.url().should('be.equal', `${Cypress.config('baseUrl')}${PROFILE_URL}`)
	// })
	// Approach 2: use environment variable
	LoginPage.navigate()
	LoginPage.login(Cypress.env('username'), Cypress.env('password'))
	cy.url().should('be.equal', `${Cypress.config('baseUrl')}${PROFILE_URL}`)
})