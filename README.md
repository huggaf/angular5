# Lessons

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Using docker container

To create a new angular project run `docker container run --rm -it -u=$UID:$(id -g $USER) -v $(pwd):/opt -w /opt teracy/angular-cli ng new [project name] --style scss -sg`

To start the container on dettached mode run `docker container run --name ng-cmd -d -u=$UID:$(id -g $USER) -v $(pwd):/opt/app -w /opt/app -p 4200:4200 -t teracy/angular-cli /bin/bash`

## Development server

With the container running run `docker exec -ti ng-cmd /bin/bash` to access the terminal

Run `docker exec -ti ng-cmd ng serve --host=0.0.0.0` to start the server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

With the container running run `docker exec -ti ng-cmd ng g`

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
