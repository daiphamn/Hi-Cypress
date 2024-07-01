import { PROFILE_URL } from '../../constants/url-constants'
import LoginPage from '../../page-objects/login-page'
import NavigationPage from '../../page-objects/navigation-page'

describe('Login', () => {
	beforeEach(() => {
		cy.visit('/')
		LoginPage.navigate()
	});
	it('Login successfully with valid account', { tags: '@login' }, () => {
		LoginPage.inputAccount(Cypress.env('username'), Cypress.env('password'))
		LoginPage.clickLoginBtn()
		cy.url().should('be.equal', `${Cypress.config('baseUrl')}${PROFILE_URL}`)
		NavigationPage.elements
			.userNameValue()
			.should('have.text', Cypress.env('username'))
	})
	it('Login unsuccessfully with invalid account', { tags: ['@login','@smoke_test'] }, () => {
		cy.fixture('invalid-account').then((data)=> {
			data.forEach((userdata)=> {
				LoginPage.inputAccount(userdata.username, userdata.password)
				LoginPage.clickLoginBtn()
				LoginPage.elements.errorMsg().should('have.text', userdata.expected)
			})
		})		
	})
	it('Login unsuccessfully with empty username and/or password', { tags: '@login' }, () => {
		cy.fixture('empty-account').then((data)=> {
			data.forEach((userdata)=> {
				if(userdata.username)	LoginPage.inputUserName(userdata.username)
				if(userdata.password)	LoginPage.inputPassword(userdata.password)
				LoginPage.clickLoginBtn()
				if(!userdata.username && !userdata.password) {
					LoginPage.elements.usernameInput().should('have.class', 'is-invalid')
					LoginPage.elements.usernameInput().should('have.class', 'is-invalid')
				}
				else if (!userdata.username) {
					LoginPage.elements.usernameInput().should('have.class', 'is-invalid')
					LoginPage.elements.passwordInput().should('not.have.class', 'is-invalid')
				}
				else {
					LoginPage.elements.usernameInput().should('not.have.class', 'is-invalid')
					LoginPage.elements.passwordInput().should('have.class', 'is-invalid')
				}
				LoginPage.reset()
			})
		})		
	})
	
})

