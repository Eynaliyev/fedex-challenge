# FedexCodeChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Project Overview

### the application is split into three modules:

App module - the wrapper module that also contains the header.
Home page module - lazy loaded module that contains all logic for main page. Although, lazy loading is an overkill for this app, if in the future we'd add additional pages it could lead to first-time load improvement.

if the app was bigger and had reusable logic, I'd add a shared module as well as any necessary feature modules

This is done to reduce time to interactivity and to render the header ASAP and give the user a sense that the application is working.

For UI I'm using Angular Material library.

The home page module is spit into a smart component home page and three dumb components search form and giphs list - the smart component passes data to its children and the dumb components are only responsible for displaying the data and communicating user interaction events back to the parent.

app.component - a wrapper component with a router outlet for pages and a common header.

home-page.component.ts - a smart components responsible for interacting with the services (in this case only giph service). Also responsible for pagination logic.

giph.service.ts - The service responsible for requesting data from the server, as well as parsing it. Currently in the home page module as it is the only place it's used, potentially could be moved to a shared module if necessary.

giph.model.ts - model for the giph

search-form.componet - a semi-dumb comonent responsible for communicating search term and triggering request for giph. It also communicates with thevalidator utility function.

giph-list.component.ts - a dumb component responsible only for displaying giph list.

shared/validator.ts - validation utility functions 


## Further Improvement

1. Implement pre-loading for future pages / feature modules - to reduce load time of secondary routes on first session
2. Add a service worker for caching the application on the client, thus reducing load times for every subsequent session
3. add e2e tests
4. add a spinner indicating that the giph list is loading
5. add centralised error handling utility - even better if logging in a remote server
6. once there are more people we could add a more comprehensive branching strategy
7. add Continuous integration and run tests there on pre-depoy
8. Deploy to a server
9. use a library for profanity detection that has types file or add my own


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
