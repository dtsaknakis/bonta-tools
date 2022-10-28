// Testing the lib's CommonJS version.
// Import and use library functions.
// Run via Node (node server.js)

const { to_units, units_per_syringe } = require("@dtsaknakis/bonta-tools");

const dysport_units = to_units("  Dysport   ");
console.log(`Dysport has ${dysport_units} Units per vial.`);

const botox_in_syringe = units_per_syringe("botox", 2.5, 0.5);
console.log(`A 0.5mL syringe with Botox diluted with 2.5mL has ${botox_in_syringe} Units.`);

