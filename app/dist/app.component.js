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
        this.title = "Coolest App Ever";
    }
};
AppComponent = __decorate([
    core_1.Component({
        template: `<div class='container'>
			<h1>{{title}}</h1>
			<calculator></calculator>
			<person-detail></person-detail>	
			<p style='clear:both'></p>	
			<hr style='height:10px;background-color:blue;' />	
			<car-detail></car-detail>
		<div>`,
        selector: 'cool-app',
        styles: [`

		.container{
			width:90%;
			margin:auto;
		}
		.container h1{
			background-color:rgb(0,100,255);
			color:white;
			width:60%;
			margin:auto;
			text-align:center;
			margin-top:5px;
			margin-bottom:5px;
		}

		.container calculator{
			float:left;
			width:40%;
		}

		.container person-detail{
			float:right;
			width:40%;
		}

	`]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map