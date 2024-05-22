const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    e2e:{
      baseUrl:"https://carepro-training.ihmafrica.com/",
      experimentalRunAllSpecs: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 60000
  },
});
