# BoNTA Tools

- Date created: 2022-10-23
- Last update: 2022-10-26
- Description: An example library created for educational purposes, 
  **please do not install** if you think it's a library ready for use, 
  it's not.  
- My notes on the process of creating a JavaScript library, building it
  with TypeScript, and publishing it to npmjs.org 
  [can be found in the 'notes' folder](notes/)

---

The library has code available in both CommonJS (ES5) and ESModules (ES6), 
so that the library consumer can select his prefered way depending on his
project.  
Currently it only has a `to_units` function which accepts one of three 
botulinum toxin brand names (as a string which it first trims and 
converts to lowercase), and returns that brand's Units per vial (a 
number).

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

