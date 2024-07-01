import { API_MSG } from '../../constants/message-constants'
import { STATUS_CODE } from '../../constants/common-constants'
import { AccountHelper } from '../../utils/api/data-preparation/account-helper'

describe('Generate token', () => {
	it('generate token successfully', () => {
		AccountHelper.generateToken(Cypress.env('username'), Cypress.env('password'))
		cy.get('@response').then((response)=> {			
			expect(response.status).to.equal(STATUS_CODE.RESPONSE_CODE_SUCCESSFUL)
			expect(response.body.token).to.be.not.null
			expect(response.body.expires).to.be.not.null
			expect(response.body.status).equal('Success')
			expect(response.body.result).equal(API_MSG.SUCCESS_AUTHORIZATION_MSG)
		})
	})
	it('generate token unsuccessfully with invalid account', () => {
		cy.fixture('invalid-account').then((data) => {
			data.forEach((userdata)=> {
				AccountHelper.generateToken(userdata.username, userdata.password)
				cy.get('@response').then((response) => {
					expect(response.status).to.equal(STATUS_CODE.RESPONSE_CODE_SUCCESSFUL)
					expect(response.body.token).to.be.null
					expect(response.body.expires).to.be.null
					expect(response.body.status).equal('Failed')
					expect(response.body.result).to.equal(API_MSG.FAILED_AUTHORIZATION_MSG)
				})					
			})
			
		})
	})
	it('generate token unsuccessfully with empty username and/or password', () => {
		cy.fixture('empty-account').then((data) => {
			data.forEach((userdata)=> {
				AccountHelper.generateToken(userdata.username, userdata.password)
				cy.get('@response').then((response) => {
					expect(response.status).to.equal(STATUS_CODE.RESPONSE_CODE_BAD_REQUEST)
					expect(response.body.code).to.equal('1200')
					expect(response.body.message).to.equal(API_MSG.REQUIRED_ACCOUNT_MSG)
				})					
			})
			
		})
	})
})
