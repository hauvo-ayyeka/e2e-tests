const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "v8tns1",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
