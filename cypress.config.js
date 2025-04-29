const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://front.serverest.dev',
    supportFile: 'cypress/support/commands.js',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: 'Relatório de Testes ServeRest',
      embeddedScreenshots: true,
      inlineAssets: true
    },
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
}) 