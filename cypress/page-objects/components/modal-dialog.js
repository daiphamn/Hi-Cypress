import { BTN_OK } from "../locators/modal-dialog-locators"

export const ModalDialog = {
	getOkButton(){
		return cy.get(BTN_OK)
	},
	clickOkButton() {
		cy.get(BTN_OK).click()
	}
}
