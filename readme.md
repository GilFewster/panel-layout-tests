# Basic Web Project Template

Generic template for web projects with build-time deendencies.

Uses [Parcel](https://parceljs.org/) for local development server and production build.

## Features

#### Zero configuration support for
- SASS/SCSS
- JSX
- ES6 and CommonJS module syntax

#### Babel transpiling
Babel is included and configured for transpiling at build time. 
  - @babel/preset-env installed
  - babel configuration and browserslist are in [package.json](package.json). Adjust as needed if defaults aren't to your liking. 
  
  Run `npx browserslist` to see a list of browsers supported based on the current content of your browserslist settings.

  ## Installation

  - Create new repo from the template.
  - Clone the repo to your dev environment
  - Install node dependancies with `npm i`
  - Make cool shit

  ## Development

  - `npm start` to create a development build and fire up a local server.
  - build files are exported to the `dist` directory

  ## Build for Production
  
  - `npm run build` to create an optimised version for deployment
  - build files are exported to the `dist` directory, replacing any dev files if present