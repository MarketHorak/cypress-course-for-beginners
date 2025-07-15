
//  POZORRRRR !!!!!!!!!!!!
// Tady spoustim svoje soubory z e2e !!!!!!

const { defineConfig } = require("cypress");
 module.exports = defineConfig({
   watchForFileChanges:false,
   e2e: {
     baseUrl:('http://127.0.0.1:5500/lessons/lesson-6/exercise/'),
     setupNodeEvents(on, config) {
       // implement node event listeners here
     },
   },
 });

// //////////// --------------------------------------------------------------

// POZORRRRR !!!!!!!!!!!!
 // Tady spoustim svoje soubor z adresy 3000  !!!!!!



 //  const { defineConfig } = require('cypress');
// module.exports = defineConfig({
// e2e: {
//   baseUrl: 'http://localhost:3000',
//   viewportWidth: 1280,
//   viewportHeight: 720,
//   defaultCommandTimeout: 8000,
//   supportFile: 'cypress/support/index.js',
// },
// });


