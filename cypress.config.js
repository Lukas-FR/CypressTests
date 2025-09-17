const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
    watchForFileChanges: false,  // <<< toto vypne automatické spouštění
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
