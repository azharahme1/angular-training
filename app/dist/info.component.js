"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let InfoComponent = class InfoComponent {
    constructor() {
        this.coolDay = true;
        this.age = 20;
        this.city = "Banglore";
        this.raining = true;
        this.colors = ['Yellow', 'Red', 'Black', 'Green', 'White'];
    }
};
InfoComponent = __decorate([
    core_1.Component({
        template: `<div>
			<h1 *ngIf='coolDay'>Today is cool day.</h1>
			<h1 *ngIf='age'>You are old.</h1>
			<h1 *ngIf='age > 40'>You are old.</h1>
			<h1 *ngIf='age <= 40'>You are young.</h1>
			<h1 *ngIf='city'>This city is over crowded.</h1>
			<h1 [hidden]='raining'>Raining outside.</h1>

			<ul>
				<li *ngFor="let color of colors">
					<p>{{color}}</p>
				</li>
			</ul>
		
			<ul>
				<li *ngFor="let color of colors;let idx = index">
					<p>No.{{idx}} --- Todays color is {{color}}</p>
				</li>
			</ul>
				

	</div>`,
        selector: 'cool-app',
    })
], InfoComponent);
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map