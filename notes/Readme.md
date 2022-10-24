# My notes on creating this library

- Last update: 2022-10-24
- Sources:
  - [How to make a JavaScript library - building with TypeScript and publishing](https://youtu.be/vRmLTZyq57U)
- Other links:
  - [Handling multiple GitHub accounts on macOS](https://gist.github.com/Jonalogy/54091c98946cfe4f8cdab2bea79430f9)
  - [YouTube, How to manage multiple GitHub accounts on a single machine with SSH keys](https://www.youtube.com/watch?v=J63meQ83yyI)

---

- Created the top-level project folder (named bonta-tools), navigated
  in it.
- Created README.md, the notes folder with this Readme.md, added
  a \.gitignore file.
- Created the src folder, where all code will be written.
- In src/ I created an 'index.ts' file. 
- In src/ I created a units/ folder and in that a 'to_units.ts' file,
  with a to_units() function that accepts a BoNTA brand name and returns
  the number of units in its vial.
- In 'index.ts' we specify what functionality we want to be available
  to the outside world, so I export the to_units() function in it.
- In the root folder of the project I created a 'tsconfig.json' for 
  the TypeScript configuration settings for transpiling to JS, in ES6
  module format (import can be used).  
  I also created a 'tsconfig.es5.json' file which does the same but
  this time in ES5 (require) JavaScript format.  
- I created a 'package.json' in the project root folder, this one is
  for the GitHub repo, not for the library (which needs its own). It
  has some info, including a script that generates both ES6 and ES5
  versions inside their respective folders in lib/.  
- I installed TypeScript via `npm i -D typescript` so that I can use
  tsc to compile the library.  
- I compiled the project with `npm run compile`, the dist/lib/ was
  created and in it es5 and es6 folders.  
- I created a 'package.json' inside dist/ (alongside lib/). It has
  some info, an important part of which is the 'main' for ES5 usage
  and 'module' for ES6 usage.  
- I also added a 'README.md' file in dist/, so that it's available
  in npm when I publish the library there.  
- I initialized a local git repo via `git init`, created a GitHub
  repo, connected the two, added the files, commited and pushed it
  to GitHub.  

Publishing to npm  

- I navigated to the dist/ folder, and then I logged into my npm 
  account via CLI `npm login` (verify with `npm whoami`).  
- I publishe the package as a public package via `npm publish --access=public`




