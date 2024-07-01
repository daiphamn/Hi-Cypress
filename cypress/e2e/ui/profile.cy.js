import ProfilePage from '../../page-objects/profile-page'
import { BookstoreHelper } from '../../utils/api/data-preparation/bookstore-helper'
import { UserToken } from '../../utils/api/user-token'
import { ModalDialog } from '../../page-objects/components/modal-dialog'
import {UI_MSG} from '../../constants/message-constants'

describe('Profile', function () {
	let bookName = 'Git Pocket Guide'

	beforeEach(() => {
		let authToken = UserToken.getAuthToken()
		// BookstoreHelper.deleteBooks(authToken, Cypress.env('userId'))
		// BookstoreHelper.getAllBooks(authToken)
		// cy.get('@response').then(response => {
		// cy.log('isbn of getAllBook is ' + response.body.books[0].isbn)
		// })
		BookstoreHelper.addBooksToCollection(
			authToken,
			Cypress.env('userId'),
			Cypress.env('isbn')
		)

		cy.logInToApplication()
	})

	it('Delete a book successfully', { tags: ['@deletebook','@smoke_test'] }, () => {
		ProfilePage.deleteBookByName(bookName)
		ModalDialog.clickOkButton()
		// cy.on('window:confirm', (message) => true)
		cy.on('window:alert', (alertText) => {
			expect(alertText).to.equal(UI_MSG.BOOK_DELETED_MSG)
		})
		ProfilePage.elements.bookLnkByName(bookName).should('not.exist')

	})
})
