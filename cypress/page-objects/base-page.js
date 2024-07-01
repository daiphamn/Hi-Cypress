import { CommonLocator } from "./locators/common-locators"

export default class BasePage {
	elements = {
		linkText: (linkText) => cy.xpath(CommonLocator.linkByText(linkText)),
		buttonText: (buttonText) => cy.xpath(CommonLocator.buttonByText(buttonText))
	}

	clickLinkText(linkText, force = false) {
		if (force) {
			cy.log('force is true')
			// TODO: Avoid to use force:true because if another emlement overlap it still run
			return this.elements.linkText(linkText).click({force: true})
		}
		return this.elements.linkText(linkText).click()
		
	}

	clickButtonText(buttonText) {
		this.elements.buttonText(buttonText).click({force: true	})
	}
}