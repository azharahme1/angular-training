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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let MoviesComponent = class MoviesComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.title = "Movie Details";
        this.movies = [
            { id: 100, name: 'Newton' },
            { id: 200, name: 'DDLJ' },
            { id: 300, name: 'Bahubali' },
        ];
    }
    ngOnInit() {
        var self = this;
        this.activatedRoute.params.subscribe(function (prms) {
            var movieId = parseInt(prms['mid']);
            for (let m of self.movies) {
                if (m.id === movieId) {
                    self.movieName = m.name;
                    break;
                }
            }
        });
    }
};
MoviesComponent = __decorate([
    core_1.Component({
        selector: 'news',
        template: `
		<h1>{{title}}</h1>
		<div>{{movieName}}</div>
	`
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], MoviesComponent);
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map