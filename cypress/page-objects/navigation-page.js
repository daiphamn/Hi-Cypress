import BasePage from "./base-page"
import { NAVIGATION_PAGE_LOCATORS as nc} from "./locators/book-store-locators"

class NavigationPage extends BasePage{
	elements = {
		userNameValue: () => cy.get(nc.LBL_USERNAME_LOCATOR)	
	}
}
export default new NavigationPage()
