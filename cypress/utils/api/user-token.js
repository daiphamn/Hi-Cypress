export class UserToken {
	static setToken(accessToken) {
		Cypress.env('token', accessToken)
	}

	static getAuthToken() {
		return { Authorization: `Bearer ${Cypress.env('token')}` }
	}
}

