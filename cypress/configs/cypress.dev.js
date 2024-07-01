const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://demoqa.com',
		projectId: 'wmbmub',
		// specPattern: '**/ui/*.cy.js',
		specPattern: '**/*.cy.js',
		setupNodeEvents(on, config) {
			// implement node event listeners here			
		},
	},
	env: {
		username: 'hoadoan',
		password: 'Password@123',
		userId: '108983df-cb7f-494f-9ce7-edc13cf04ff0',
		isbn: '9781449325862',
		apiUrl: 'https://demoqa.com',
		token: '',
		TAGS: '@test_single or @test_multiple',
	},
})
