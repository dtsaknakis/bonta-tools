// Import library function via CommonJS
// Run via Node (node server.js)

//const { to_units } = require("@dtsaknakis/bonta-tools");
const { units_per_syringe } = require("../dist/lib/es5");

//console.log(`Bocouture has ${to_units("Bocouture")} Units per vial.`);
console.log(units_per_syringe("botox", 2, 0.5));

