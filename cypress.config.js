const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.serasa.com.br',
    setupNodeEvents(on, config) {
      // Implement Node event listeners here
    },
  },
});