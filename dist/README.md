# BoNT-A Tools

- Date created: 2022-10-26
- Last update: 2022-10-26
- Created by: Dimitris Tsaknakis (scoped namespace \@dtsaknakis)

---

## Info

This is just an exercise library in order to learn how
to create an npm package.  
**Please do not install**, it's only for personal learning purposes.  
So far it just contains an example `to_units` function that accepts a 
botulinum toxin brand name string and returns an integer with the brand's 
units per vial.

## Sample usage

Install via the command line with:

```zsh
npm install @dtsaknakis/bonta-tools

## OR ##

npm i @dtsaknakis/bonta-tools

## OR as a development dependency ##

npm i -D @dtsaknakis/bonta-tools
```

You can import the `to_units` function from 'units/to_units' either 
via `import` (ES6) or `require` (ES5), pass it one of the "botox", 
or "dysport", or "bocouture" brands, and get its Units per 
vial returned as an integer.  

Example using `require`:

```ts
const { to_units } = require("@dtsaknakis/bonta-tools");

console.log(to_units("botox")); // 100
```

Example using `import`:

```ts
import { to_units } from "@dtsaknakis/bonta-tools";

console.log(to_units("dysport")); // 500
```

