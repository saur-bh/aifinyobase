const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
	projectId: "tmyvht",
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
	env: {
		username : "saurabh.verma@aifinyo.de",
		password: "welcome123",

	},
	defaultCommandTimeout : 10000,
	retries:{
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
		const billomatid = process.env.APP_ID
      	const system = process.env.APP_SYS
		if(billomatid && system != undefined){
			config.baseUrl = `https://${billomatid}.${system}.net`
			return config

		}

     
		},
		baseUrl: "https://dresden.billodev.net/app/auth",

	},
});