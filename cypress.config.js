const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

// this function is used to read settings on a specific environment
// Define the function to fetch and merge settings
module.exports = defineConfig({
	projectId: '97id1t',
	watchForFileChanges: false,
	e2e: {
		baseUrl: 'https://demoqa.com',
		specPattern: 'cypress/e2e/**/*.cy.js',		
		setupNodeEvents(on, config) {
			// implement node event listeners here
			allureWriter(on, config)						
			require('@cypress/grep/src/plugin')(config);
			return config;
		}
	},
	env: {
		"allureResultsPath": "cypress/reports/allure-results",
		"grepFilterSpecs": true,
		"grepOmitFiltered": true,		
		username: 'hoadoan',
		password: 'Password@123',
		userId: '502681e5-1624-438a-b107-3ec38bdcfb05',
		isbn: '9781449325862',
		apiUrl: 'https://demoqa.com',
		token: '',
	},
})
