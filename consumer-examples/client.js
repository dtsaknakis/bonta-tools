// Testing the lib's ES6 version.
// Import and use library functions.
// Run via `npm start` (uses Parcel on index.html)

import { to_units, units_per_syringe } from "@dtsaknakis/bonta-tools";

const dysport_units = to_units("  Dysport   ");
const phrase1 = `Dysport has ${dysport_units} Units per vial.`;
console.log(phrase1);

const botox_in_syringe = units_per_syringe("botox", 2.5, 0.5);
const phrase2 = `A 0.5mL syringe with Botox diluted with 2.5mL has ${botox_in_syringe} Units.`;
console.log(phrase2);

// Add data received to HTML elements
const out1 = document.getElementById("output-1");
const out2 = document.getElementById("output-2");
out1.innerText = phrase1;
out2.textContent = phrase2;

