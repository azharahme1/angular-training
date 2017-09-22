"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Capita India Private Ltd';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: `<h1> {{title}} </h1>
  			<nav>
    			<ul>
  					<li><a routerLink='news'>News</a></li>
  					<li><a routerLink='weather'>Weather</a></li>
  					<li><a routerLink='cricket'>Cricket</a></li>
  					<li><a routerLink=''>Calculator</a></li>
  					<li><a routerLink='movies/100'>Movies 1</a></li>
            <li><a routerLink='movies/200'>Movies 2</a></li>
            <li><a routerLink='movies/300'>Movies 3</a></li>
            <li><a routerLink='carlist'>Car List</a></li>
  					<li><a routerLink=''>Products</a></li>
  					<li><a routerLink=''>Partners</a></li>
  				</ul>
  			</nav>
  			<router-outlet></router-outlet>
    		`,
        styles: [`
		nav{
			background-color:black;
		}		

		li {
			display:inline;
		}
		
		li a{
			color:white;
			font-size:20px;
			text-decoration:none;
			margin-right:20px;
		}
	`]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map