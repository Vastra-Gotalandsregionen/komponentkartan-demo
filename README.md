# KomponentkartanDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

Demo can be found here: https://vastra-gotalandsregionen.github.io/komponentkartan-demo/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To publish site to github pages install this tool: 
> `npm i -g angular-cli-ghpages`
Then run follwing commands in terminal: 
> `ng build --prod`
and `ngh`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project structure
```
$/
  src/
  src/assets/
  src/tests/
  src/environments/
  src/docs/
  src/lib/
  samples/
  dist/
  .gitignore
  README.md
  package.json
```

- `src` - Main projects (the product code)
- `src/assets` - CSS, SASS files, images and other web content
- `src/tests` - Jasmine Test projects
- `src/environments` - configuration for different environments, prod, qa, test etc
- `src/docs` - Documentation stuff, markdown files, help files etc.
- `src/lib` - Things that can **NEVER** exist in a npm package, only common code shared by your application
- `samples` (optional) - Sample projects
- `dist` (optional) - folder for all code you want to publish for npm or specific envrionment, must include a package.json file containing all relevant dependencies
- `package.json` - magic

## .gitignore
```
*.js
```

There's probably more things that go in the ignore file.


- Update: Added stuff
