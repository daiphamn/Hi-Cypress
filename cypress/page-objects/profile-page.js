import { PROFILE_URL } from '../constants/url-constants'
import BasePage from './base-page'
import { PROFILE_PAGE_LOCATORS } from './locators/book-store-locators'


class ProfilePage extends BasePage{
	elements = {
		deleteIconByBookName: (bookName) =>
			cy.xpath(
				PROFILE_PAGE_LOCATORS.BTN_DELETE_BOOKS_BY_NAME_LOCATOR(bookName)
			),
		bookLnkByName: (bookname) => cy.get(PROFILE_PAGE_LOCATORS.LNK_BOOK_NAME_LOCATOR(bookname))
	}
	navigate() {
		cy.visit(PROFILE_URL)
	}

	clickDeleteIconByBookName(bookName) {
		this.elements.deleteIconByBookName(bookName).click()
	}

	deleteBookByName(bookName) {
		this.clickDeleteIconByBookName(bookName)
	}

	isBookNotDisplayed(bookName) {
		this.isElementNotExisted(LNK_BOOK_NAME_LOCATOR(bookName.toUpperCase()))
	}
}
export default new ProfilePage()
