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
var angular2_1 = require("angular2/angular2");
var HttpServer = (function () {
    function HttpServer() {
    }
    HttpServer.prototype.HttpServer = function () {
        console.log("loading server");
    };
    HttpServer = __decorate([
        angular2_1.Component({
            selector: "http-server",
            inputs: [
                "host: string",
                "port: number"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HttpServer);
    return HttpServer;
})();
exports.HttpServer = HttpServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGlyZWN0aXZlcy9odHRwLXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBQW1DLG1CQUFtQixDQUFDLENBQUE7QUFVdkQ7SUFBQTtJQU9BLENBQUM7SUFIQywrQkFBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFiSDtRQUFDLG9CQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUU7Z0JBQ04sY0FBYztnQkFDZCxjQUFjO2FBQ2Y7U0FDRixDQUFDOztrQkFBQTtJQVFGLGlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxrQkFBVSxhQU90QixDQUFBIn0=