const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  videoUploadOnPasses: false,
  disableSnapshot: true,
  screenshotOnRunFailure: true,
  numTestsKeptInMemory: 10000,
  defaultCommandTimeout: 20000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  downloadsFolder: 'cypress/downloads/',
  retries: {
    runMode: 2
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
