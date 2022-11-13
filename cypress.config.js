const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  projectId: "33ec6z",
  defaultCommandTimeout: 8000,
  projectId: "33ec6z",
  requestTimeout: 15000,
  responseTimeout: 230000,
  reporter: "mochawesome",
  reporterOptions: {
    // disable overwrite to generate many JSON reports
    overwrite: false,
    // do not generate intermediate HTML reports
    html: false,
    // generate intermediate JSON reports
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/integration/examples/BDD/*.feature",
  },
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },
});
