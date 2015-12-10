"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("source-map-support/source-map-support").install();
var jsdom = require("jsdom");
require("zone.js");
require("reflect-metadata");
var angular2_1 = require("angular2/angular2");
jsdom.env("", function (err, window) {
    global["window"] = window;
    var AppComponent = (function () {
        function AppComponent() {
        }
        AppComponent = __decorate([
            angular2_1.Component({
                selector: "my-app",
                template: "<h1>My First Angular 2 App</h1>"
            }), 
            __metadata('design:paramtypes', [])
        ], AppComponent);
        return AppComponent;
    })();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUUzRCxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUUvQixRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQix5QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUU1QyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO0lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7SUFLMUI7UUFBQTtRQUFxQixDQUFDO1FBSnRCO1lBQUMsb0JBQVMsQ0FBQztnQkFDUCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLGlDQUFpQzthQUM5QyxDQUFDOzt3QkFBQTtRQUNtQixtQkFBQztJQUFELENBQUMsQUFBdEIsSUFBc0I7QUFHeEIsQ0FBQyxDQUFDLENBQUMifQ==