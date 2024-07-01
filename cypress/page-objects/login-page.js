import { LOGIN_URL } from '../constants/url-constants'
import BasePage from './base-page'
import { LOGIN_PAGE_LOCATORS } from './locators/book-store-locators'

class LoginPage extends BasePage{
	elements = {
		usernameInput: () => cy.get(LOGIN_PAGE_LOCATORS.TXT_USER_NAME_LOCATOR),
		passwordInput: () => cy.get(LOGIN_PAGE_LOCATORS.TXT_PASSWORD_LOCATOR),
		loginBtn: () => cy.get(LOGIN_PAGE_LOCATORS.BTN_LOGIN_LOCATOR),
		errorMsg: () => cy.get(LOGIN_PAGE_LOCATORS.MSG_ERROR)
	}
	navigate() {
		cy.visit(LOGIN_URL)
	}

	inputUserName(username) {
		this.elements.usernameInput().type(username)
	}

	inputPassword(password) {
		this.elements.passwordInput().type(password)
	}
	
	inputAccount(username, password) {						
		this.inputUserName(username)
		this.inputPassword(password)
	}

	clickLoginBtn() {
		this.elements.loginBtn().click()
	}

	login(username, password) {
		this.inputAccount(username, password)
		this.clickLoginBtn()
	}
	reset() {
		this.elements.usernameInput().clear()
		this.elements.passwordInput().clear()
	}
	
}
export default new LoginPage()
