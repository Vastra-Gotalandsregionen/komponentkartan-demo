# KomponentkartanDemo

This project can be found here: [Demo](https://vastra-gotalandsregionen.github.io/komponentkartan-demo/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### To publish site to github pages.

Make sure you have your Github credentials setup correctly before you run the command to push.
> `git remote set-url origin https://<Username>:<password>@github.com/Vastra-Gotalandsregionen/komponentkartan-demo.git`

Use release-command:
> `npm run release-gh`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

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
