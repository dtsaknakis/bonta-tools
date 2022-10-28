# BoNTA Tools

- Date created: 2022-10-23
- Last update: 2022-10-28
- Description: An example library created for educational purposes, 
  **please do not install** if you think it's a library ready for 
  production usage, it's not.  
- My notes on the process of creating a JavaScript library, building it
  with TypeScript, and publishing it to npmjs.org can be found 
  [in the notes directory](notes/)
- Demo usage of the library can be found in the [consumer-examples](consumer-examples/) 
  directory.

---

The library is functional in both CommonJS (ES5) and ESModules (ES6), 
so that the library consumer can select his prefered way depending on his
project.  
Currently it only has:  

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

---

Again, this is just an exercise while I learn about JavaScript, TypeScript, 
Node, and creating npm packages, and this library most likely has nothing 
useful to another developer - but if it does then feel free to use it 
as you see fit.  

