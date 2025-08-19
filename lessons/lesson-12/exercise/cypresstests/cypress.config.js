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

// const { defineConfig } = require("cypress");
// const { readFileSync } = require("fs");

// module.exports = defineConfig({
//   watchForFileChanges: false,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // Získání názvu prostředí z příkazové řádky, např. --env prostredie=staging
//       const prostredie = config.env.prostredie;
//       // Načtení souboru podle prostředí
//       const configData = readFileSync(
//         `./cypress/config/${prostredie}.config.json`,
//         "utf-8"
//       );
//       // Parsování obsahu souboru do JSON objektu
//       const configJson = JSON.parse(configData);
//       // Sloučení načtené konfigurace do config.env
//       config.env = { ...config.env, ...configJson };
//       return config;
//     },
//   },
// });
const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  watchForFileChanges: false,

  e2e: {
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // 1) Zjisti požadované prostředí (např. --env prostredie=config.productionA)
      const prostredie = config.env.prostredie || null;

      // 2) Když není zadáno, jen zaloguj a pokračuj bez merge
      if (!prostredie) {
        console.log(
          "⚠️  Nebylo zadáno --env prostredie=..., pokračuju bez externího configu."
        );
        return config;
      }

      // 3) Sestav cestu k JSONu
      const jsonPath = path.resolve(
        __dirname,
        "cypress",
        "config",
        `${prostredie}.json`
      );

      // 4) Ověř existenci souboru
      if (!fs.existsSync(jsonPath)) {
        console.error(`❌ Soubor nenalezen: ${jsonPath}`);
        throw new Error(
          `Konfigurační soubor pro prostředí "${prostredie}" neexistuje. ` +
            `Zkontroluj název a cestu (cypress/config/${prostredie}.json).`
        );
      }

      // 5) Načti a parse-ni JSON (s chytáním chyb)
      let configJson;
      try {
        const raw = fs.readFileSync(jsonPath, "utf-8");
        configJson = JSON.parse(raw);
      } catch (err) {
        console.error("❌ Nelze načíst/parsovat JSON:", err.message);
        throw err;
      }

      // 6) Merge do config.env (JSON PŘEPISUJE stejnojmenné klíče)
      config.env = { ...config.env, ...configJson };

      console.log("✅ Načteno prostředí:", prostredie);
      console.log("📄 Soubor:", jsonPath);
      console.log("🌱 env po mergi:", config.env);

      return config;
    },
  },
  env: {
    baseUrl: "http://localhost:3000",
  },
});
