/// <reference path="../typings/jsdom/jsdom.d.ts"/>

require("source-map-support/source-map-support").install();

import * as jsdom from "jsdom";

import "zone.js";
import "reflect-metadata";
import {Component} from "angular2/angular2";

jsdom.env("", (err, window) => {
  global["window"] = window;
  @Component({
      selector: "my-app",
      template: "<h1>My First Angular 2 App</h1>"
  })
  class AppComponent { }
  //bootstrap(AppComponent);

});
