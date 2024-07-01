import { STATUS_CODE } from '../../constants/common-constants'
import { BookstoreHelper } from '../../utils/api/data-preparation/bookstore-helper'
import { UserToken } from '../../utils/api/user-token'

describe('Get all books', () => {
	it('Get all books successfully', { tags: ['@get_books','@smoke_test'] }, () => {
		BookstoreHelper.getAllBooks(UserToken.getAuthToken)
		cy.get('@response').then((response) => {
			expect(response.status).to.equal(STATUS_CODE.RESPONSE_CODE_SUCCESSFUL)
			// Assert all the returned information 
		})
	})
})
