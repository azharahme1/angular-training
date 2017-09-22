"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const home_component_1 = require("./home.component");
const cricket_component_1 = require("./cricket.component");
const news_component_1 = require("./news.component");
const weather_component_1 = require("./weather.component");
const movies_component_1 = require("./movies.component");
const carlist_component_1 = require("./carlist.component");
const carform_component_1 = require("./carform.component");
const car_service_1 = require("./car.service");
const log_service_1 = require("./log.service");
const app_component_1 = require("./app.component");
const app_routes_1 = require("./app.routes");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routes_1.initializedRoutes],
        providers: [
            log_service_1.LogService,
            { provide: 'ICarService', useClass: car_service_1.CarService }
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            cricket_component_1.CricketComponent,
            news_component_1.NewsComponent,
            weather_component_1.WeatherComponent,
            movies_component_1.MoviesComponent,
            carlist_component_1.CarListComponent,
            carform_component_1.CarFormComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map