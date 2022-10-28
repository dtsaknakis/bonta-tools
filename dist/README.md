# BoNT-A Tools

- Last update: 2022-10-28
- Created by: Dimitris Tsaknakis (scoped namespace \@dtsaknakis)

---

## Info

This is just an exercise library in order to learn how
to create an npm package.  
**Please do not install**, it's only for personal learning purposes.  
So far it just contains:  

- a `to_units` function that expects one of three botulinum toxin brand 
  names (either "botox", or "dysport", or "bocouture", as a string) and 
  returns a number with the brand's total units per vial  
- a `units_per_syringe` function that expects one of the brand names 
  above, a product dilution as a number, and a syringe size as a number.  
  It returns the total units of the given product diluted with the 
  given dilution value inside the given syringe size.  

## Installing the library

Install via the command line with:

```zsh
npm install @dtsaknakis/bonta-tools # or npm i @dtsaknakis/bonta-tools

## OR as a development dependency ##

npm i -D @dtsaknakis/bonta-tools
```

## Example usage

Access the `to_units` or `units_per_syringe` functions either via ES5 
`require` or ES6 `import` from 'units/to_units'.  
ES5 example using `require`:

```ts
const { to_units, units_per_syringe } = require("@dtsaknakis/bonta-tools");

console.log(to_units("botox")); // 100
console.log(units_per_syringe("botox", 2.5, 0.5)); // 20 Botox units inside a 0.5mL syringe, when it's diluted with 2.5mL
```

ES6 example using `import`:

```ts
import { to_units, units_per_syringe } from "@dtsaknakis/bonta-tools";

console.log(to_units("botox")); // 100
console.log(units_per_syringe("botox", 2.5, 0.5)); // 20 Botox units inside a 0.5mL syringe, when it's diluted with 2.5mL
```

