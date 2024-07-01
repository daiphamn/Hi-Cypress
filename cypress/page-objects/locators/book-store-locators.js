// If you are dealing with pages that have a large number of elements, 
// it may be beneficial to consider splitting the locators into separate files or modules such as student-locators
export const LOGIN_PAGE_LOCATORS = {
	TXT_USER_NAME_LOCATOR: '#userName',
	TXT_PASSWORD_LOCATOR: '#password',
	BTN_LOGIN_LOCATOR: '#login',
	MSG_ERROR: '#name'
}
export const BOOK_STORE_LOCATORS = {
    TXT_SEARCH_BOX_LOCATOR : '#searchBox',
    TBL_SEARCH_ITEMS_LOCATOR : 'span[id*="see-book"]'

}
export const PROFILE_PAGE_LOCATORS = {
	TXT_SEARCH_BOX_LOCATOR: '#books-wrapper #searchBox',
	LNK_BOOK_NAME_LOCATOR: (bookName) => `span[id*="see-book-${bookName}"]`,
	BTN_DELETE_BOOKS_BY_NAME_LOCATOR: (bookName) =>
		`//a[text()="${bookName}"]//ancestor::div[@role="rowgroup"]//span[@title="Delete"]`,
}
export const NAVIGATION_PAGE_LOCATORS = {
    LBL_USERNAME_LOCATOR : '#userName-value',
    BTN_LOGOUT_LOCATOR : '//button[@id="submit" and text()="Log out"]'

}
