import { ACCOUNT_ENDPOINT} from '../../../constants/endpoint-constants'
import { RequestHelper } from '../request-helper'
import { UserToken } from '../user-token'

export const AccountHelper = {
	generateToken(username, password) {
		let url = ACCOUNT_ENDPOINT.ENDPOINT_GENERATE_TOKEN_CREATE
		let body = {
			userName: username,
			password: password
		}
		RequestHelper.sendPostRequest(null, url, body)
		cy.get('@response').then((response)=> {
			UserToken.setToken(response.body.token)
		})
	}	
}
