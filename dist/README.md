# BoNT-A Tools

- Last update: 2022-10-28
- Created by: Dimitris Tsaknakis (scoped namespace \@dtsaknakis)

---

## Info

This is just an exercise library in order to learn how
to create an npm package.  
**Please do not install**, it's only for personal learning purposes.  
So far it just contains an example `to_units` function that accepts a 
botulinum toxin brand name string and returns an integer with the brand's 
units per vial.

## Installing the library

Install via the command line with:

```zsh
npm install @dtsaknakis/bonta-tools # or npm i @dtsaknakis/bonta-tools

## OR as a development dependency ##

npm i -D @dtsaknakis/bonta-tools
```

## Example usage

Access the `to_units` or `units_per_syringe` functions either via ES5 
`require` or ES6 `import`.  from 'units/to_units' either 


via `import` (ES6) or `require` (ES5), pass it one of the "botox", 
or "dysport", or "bocouture" brands, and get its Units per 
vial returned as an integer.  

ES5 example using `require`:

```ts
const { to_units, units_per_syringe } = require("@dtsaknakis/bonta-tools");

console.log(to_units("botox")); // 100
console.log(units_per_syringe("botox", 2.5, 0.5)); // 20 Botox units inside a 0.5mL syringe, when it's diluted with 2.5mL
```

Example using `import`:

```ts
import { to_units, units_per_syringe } from "@dtsaknakis/bonta-tools";

console.log(to_units("botox")); // 100
console.log(units_per_syringe("botox", 2.5, 0.5)); // 20 Botox units inside a 0.5mL syringe, when it's diluted with 2.5mL
```

