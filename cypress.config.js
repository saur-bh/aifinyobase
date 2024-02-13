const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		// overwrite: false,
		reportFilename: "[status]_[datetime]-report",
		// timestamp: "longDate",
		charts: true,
		reportPageTitle: 'Automation Report -Aifinyo Regression',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: true,
		// ignoreVideos: true,
		videoOnFailOnly: true
	  },
	  
	defaultCommandTimeout : 100000,
	retries: {
		runMode: 1,
		openMode: 1,
		},
	e2e: {
		setupNodeEvents(on, config) {
			on('before:run', async details => {
				console.log('override before:run');
				await beforeRunHook(details);
			});

			on('after:run', async () => {
				console.log('override after:run');
				await afterRunHook();
			});
		},
		baseUrl:'https://k20270727.billomat.net',

	},
});