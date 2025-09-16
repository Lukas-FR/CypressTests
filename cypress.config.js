const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,  // <<< toto vypne automatické spouštění
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
