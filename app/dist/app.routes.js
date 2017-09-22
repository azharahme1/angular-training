"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_component_1 = require("./home.component");
const cricket_component_1 = require("./cricket.component");
const news_component_1 = require("./news.component");
const weather_component_1 = require("./weather.component");
const movies_component_1 = require("./movies.component");
const carlist_component_1 = require("./carlist.component");
const carform_component_1 = require("./carform.component");
const routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'carform/:vin',
        component: carform_component_1.CarFormComponent
    },
    {
        path: 'carlist',
        component: carlist_component_1.CarListComponent
    },
    {
        path: 'movies/:mid',
        component: movies_component_1.MoviesComponent
    },
    {
        path: 'news',
        component: news_component_1.NewsComponent
    },
    {
        path: 'weather',
        component: weather_component_1.WeatherComponent
    },
    {
        path: 'cricket',
        component: cricket_component_1.CricketComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.initializedRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map