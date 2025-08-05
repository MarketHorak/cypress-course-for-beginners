//const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   watchForFileChanges: false,
//   viewportWidth: 1920,
//   viewportHeight: 1080,
//   pageLoadTimeout: 60000,
//   defaultCommandTimeout: 1000,
//   e2e: {
//     baseUrl:'http://localhost:3000',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },

// setupNodeEvents(on, config) {
//   // implement node event listeners here
// }

//   },
// });

const { defineConfig } = require("cypress");
const { readFileSync } = require("fs");

module.exports = defineConfig({
  watchForFileChanges: false,

  e2e: {
    setupNodeEvents(on, config) {
      // Získání názvu prostředí z příkazové řádky, např. --env prostredie=staging
      const prostredie = config.env.prostredie;

      // Načtení souboru podle prostředí
      const configData = readFileSync(`./cypress/config/${prostredie}.config.json`, 'utf-8');

      // Parsování obsahu souboru do JSON objektu
      const configJson = JSON.parse(configData);

      // Sloučení načtené konfigurace do config.env
      config.env = { ...config.env, ...configJson };

      return config;
    },
  },
});