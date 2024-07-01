export const ACCOUNT_ENDPOINT = {
	ENDPOINT_GENERATE_TOKEN_CREATE: '/Account/v1/GenerateToken',
	ENDPOINT_AUTHORIZED_CREATE: '/Account/v1/Login',
}

export const BOOKSTORE_ENDPOINT = {
	ENDPOINT_BOOKS_DELETE: (userid) => `/BookStore/v1/Books?UserId=${userid}`,
	ENDPOINT_ADD_BOOK_TO_COLLECTION_CREATE: '/BookStore/v1/Books',
	ENDPOINT_BOOKS_GET: '/BookStore/v1/Books',
}
