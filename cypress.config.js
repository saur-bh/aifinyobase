const { defineConfig } = require('cypress');
const {
  beforeRunHook,
  afterRunHook,
} = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  projectId: 'tmyvht',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      apiToken:
        'b709f05e2eb3a5b7f1b28bdd37d3cb4e6144c339c29aee64529fbf37da2da54d',
      projectCode: 'BF',
      logging: true,
      basePath: 'https://api.qase.io/v1',
      screenshotFolder: 'screenshots',
      sendScreenshot: true,
      runComplete: true,
      environmentId: 1,
      rootSuiteTitle: 'Cypress tests',
    },
  },
  env: {
    username: 'saurabh.verma@aifinyo.de',
    password: 'welcome123',
    id: process.env.APP_SYS,
  },
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      const billomatid = process.env.APP_ID || 'stagqa';
      const system = process.env.APP_SYS|| 'billodev';
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      config.baseUrl = `https://${billomatid}.${system}.net`;
      return config;
    },
    baseUrl: 'https://stagqa.billodev.net',
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});
