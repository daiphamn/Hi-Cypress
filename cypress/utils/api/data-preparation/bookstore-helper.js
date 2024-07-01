import { RequestHelper } from '../request-helper'
import { BOOKSTORE_ENDPOINT } from '../../../constants/endpoint-constants'

export const BookstoreHelper = {
	addBooksToCollection(userToken, userId, isbn) {
		let endPoint = BOOKSTORE_ENDPOINT.ENDPOINT_ADD_BOOK_TO_COLLECTION_CREATE
		let data = {
			userId: userId,
			collectionOfIsbns: [
				{
					isbn: isbn
				}
			]
		}
		RequestHelper.sendPostRequest(userToken, endPoint, data)
	},

	getAllBooks(userToken, header) {
		let endPoint = BOOKSTORE_ENDPOINT.ENDPOINT_BOOKS_GET
		RequestHelper.sendGetRequest(userToken, endPoint, header)		
	}
}
