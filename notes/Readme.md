# My notes on creating this library

- Last update: 2022-10-28
- Sources:
  - [How to make a JavaScript library - building with TypeScript and publishing](https://youtu.be/vRmLTZyq57U)

---

## Initial project setup

I created this project's directory (the top-level project directory) 
which for this project I named 'bonta-tools' (because the library idea 
is supposed to be mainly some helper functions in order to assist 
with botulinum toxin relevant info (units per product vial, units in 
specific sized syringes after dilution, etc).
I also added a [\.gitignore](../.gitignore) file for any files that are 
not to be included in the GitHub project of the library. It exludes the 
node_modules folder and the dist/lib folder (leaving the package.json 
file and the README.md file - see below when I compile the dist folder).  

I created a [src](../src) directory, where all the source code of the 
development process is. In it I created an [index.ts](../src/index.ts) 
file which is initially empty but will export the functionality that I 
want the end user/cosumer to have available.  

### The library code

In [src](../src) I created:

- a [data](../src/data) directory with a 
  [products.ts](../src/data/products.ts) file in it, which exports a 
'products' object with some BoNT-A brands info. (*So far I'm not using 
  it for something and I don't know why I created it just yet, but in 
  time it may serve its purpose*).
- a [units](../src/units) directory with a [to_units](../src/units/to_units.ts) 
  file in it. In it a 'to_units()' function is created and `export`ed; the function 
  accepts a BoNT-A product name string, and it returns its units per 
  vial if it's one of three products, otherwise it returns 0.  
  A second function named 'units_per_syringe' is created, which returns 
  the total units of a specific product with a given dilution inside a given 
  size syringe.

### Exporting the library's functionality we want to the consumer

The [src/index.ts](../src/index.ts) file is the source of truth, where we export 
everything that we want to make available to the end consumer to use 
from our library (everything else will be private). So, in it I `export` 
the 'to_units' function.  

### Transpiling to both ES6 and ES5

Inside the root directory I created:

- a [tsconfig.json](../tsconfig.json) (manually, not via the `tsc --init`
  script). This holds the configuration for `tsc` (the tool that comes 
  with TypeScript once you install it) to transpile my TypeScript source 
  code to ES6 (ESModules, `import`) syntax JavaScript, inside a 
  '/dist/lib/es6' directory.  
- a [tsconfig.es5.json](../tsconfig.es5.json) file with almost the same 
  configuration but this time it transpiles to ES5 (commonJS, `require` 
  syntax) inside a '/dist/lib/es5' directory.  

### The GitHub repo's package.json, installing packages and transpiling the code

In the project's root directory I created a [package.json](../package.json) 
file via the `npm init` command. Note that this is ***not the library's***, 
but the GitHub repo's of the project, providing info to the people that 
will download the library (which will be published to npmjs via GitHub). 
I modified it by adding info to the fields, eg on the GitHub repository 
url, the author name, etc.  
In it I created a "compile" script which first removes any previous 
content from the '/dist/lib' directory, and uses `tsc` to transpile the 
TypeScript source code to both ES6 and ES5 JavaScript. For the ES5 
version, the `--build` flag is passed to `tsc`, along with the 
'tsconfig.es5.json' configuration file created above.  

I **installed TypeScript** as a dev dependency (`npm i -D typescript`), 
in order to have `tsc` and be able to transpile TypeScript to JavaScript.  
Then **I compiled** by running my "compile" script (`npm run compile` 
from the project root directory), thus creating the dist directory with 
a lib directory in it - in turn containing es5 and es6 directories for 
each of the library versions. (Note that since in both tsconfig JSON 
files I added the 'declaration' option to be true, the relevant \.d\.ts 
type declaration files are automatically created for me by `tsc`).  

### The library's package.json

Another '[package.json](../dist/package.json)' is created, this time inside the dist directory. 
This is for the library itself, since it's going to be published to 
[npmjs.com](https://www.npmjs.com/). In it, apart from the standard 
'author', 'description', 'keywords' fields, the 'name' field has the 
library name but **I prefixed it** with my GitHub username so that ***it's 
scoped*** and no name clashes with another package with the same name 
in npmjs exist, there's also the 'repository' pointing to the GitHub 
repo, a 'bugs' pointing to the repo's issues section, and some other 
fields.  
This is what mine looks like, currently:  

```json
{
    "name": "@dtsaknakis/bonta-tools",
    "version": "0.0.1",
    "description": "An example library for learning purposes. Please do not install.",
    "main": "lib/es5/index.js",
    "module": "lib/es6/index.js",
    "sideEffects": false,
    "repository": {
        "type": "git",
        "url": "git+https://github.com/dtsaknakis/bonta-tools.git"
    },
    "files": [
        "lib",
        "CHANGELOG.md",
        "LICENSE",
        "package.json",
        "README.md"
    ],
    "keywords": [
        "javascript",
        "typescript",
        "botulinum toxin",
        "bonta",
        "botox",
        "dysport",
        "bocouture",
        "utilities",
        "tools",
        "dermatology",
        "medical"
    ],
    "author": "Dimitris Tsaknakis",
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/dtsaknakis/bonta-tools/issues"
    },
    "homepage": "https://github.com/dtsaknakis/bonta-tools#readme"
}
```

The 'files' section specifies what's to be included in the library, 
'main' and 'module' allow us to have both ES5 (commonjs) and ES6 (ESM) 
enabled with our library for the end user to use.  

Note that I also added a README.md to the dist folder.  

## Local Git project and GitHub repository

I initialized a local Git repo project in the root project directory 
via `git init`, then went to my GitHub dtsaknakis profile and created 
a new repo (also named bonta-tools). Then I connected the two via the 
`git remote add origin` command.  

*Note*: since I have more than one GitHub account connected to my laptop, 
in the remote add origin command I made sure that the url of the github 
repo had **the '\-dtsaknakis' part added to the url**, so 
'`git remote add origin git@github.com:dtsaknakis/bonta-tools.git`' 
was the command for me. This is because that's how I set up my GitHub 
hosts personally, in my '\~/\.ssh/config' and '\~/\.gitconfig' files.  

I created an **initial commit** to the local repo and **pushed** the 
files to the GitHub repo so that it's up to date.  

*Note*: in my case I had to `eval "$(ssh-agent -s)"` first, so that 
an agent was running, and then do the push. (Also note that one can see 
what SSH key is running with the agent via `ssh-add -l`, and one can 
remove its current SSH key via `ssh-add -D`).  

## Publishing to npmjs

In the command line, **from the dist folder**, I logged into my npmjs 
account via `npm login` (it asks for the username, the password, and an 
email to which it sends a verification code). To check if logged in, 
type `npm whoami`.  

Then **I published my library** to npm via `npm publish --access=public` 
and it's now up in the npm registry for others to install and use! This 
is the link to it: [https://www.npmjs.com/package/@dtsaknakis/bonta-tools](https://www.npmjs.com/package/@dtsaknakis/bonta-tools).  

*Note*: If it's not the first publish but one just wants to update the changes 
with a version update, one can do an `npm version patch` before the 
npm publish command.  

## Using the library as a consumer

In order to demonnstrate usage of the library I created a directory 
named [consumer-examples](../consumer-examples/). In it I have a 
'package.json' file (created via `npm init` from inside that folder).  
I installed TypeScript (via `npm i -D typescript`) and [Parcel](https://parceljs.org/) 
(via `npm i -D parcel`), and of course my new npm library (via `npm i -D @dtsaknakis/bonta-tools`).  

### Testing CommonJS server-side via `node` command

I created a file named '[server.js](../consumer-examples/server.js)'. In 
it I get the functions via `require` and use them in order to calculate 
the total units of a Dysport vial and the units of a 2.5mL diluted Botox 
inside a 0.5mL syringe:

```js
const { to_units, units_per_syringe } = require("@dtsaknakis/bonta-tools");

const dysport_units = to_units("  Dysport   ");
console.log(`Dysport has ${dysport_units} Units per vial.`);

const botox_in_syringe = units_per_syringe("botox", 2.5, 0.5);
console.log(`A 0.5mL syringe with Botox diluted with 2.5mL has ${botox_in_syringe} Units.`);
```

### Testing the ES6 lib version client-side via Parcel

I created a [consumer-examples/index.html](../consumer-examples/index.html) 
file pointing to a [consumer-examples/client.js](../consumer-examples/client.js) 
file.  
Inside the [consumer-examples/package.json](../consumer-examples/package.json) 
I created a "start" script using Parcel on the 'index.html' file, also 
using Parcel's `--open` flag to automatically open the browser for me.  

In [client.js](../consumer-examples/client.js) I use `import` to get the 
library functions, and test it the same way I did above:

```js
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
```

Then in order to see it in action, I ran the "start" script (`npm start`), 
opened [http://localhost:1234](http://localhost:1234), and opened the 
browser's dev tools to see the console output with the prints.  

The library works, both in CommonJS and in ES6 modules versions!  

<br><br>

