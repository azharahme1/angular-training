"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let CarComponent = class CarComponent {
    constructor() {
        this.name = "BMW X6";
    }
    doChange() {
        //UI updating logic
        this.name = "Jaguar XE";
    }
};
CarComponent = __decorate([
    core_1.Component({
        template: `<div>
		<h1>Car Component</h1>
		<h1>Name : {{name}}</h1>
		<h1>Name : {{name}}</h1>
		<h1>Name : {{name}}</h1>
		<h1>Name : {{name}}</h1>
		<input (click)='doChange()' type=button value='Change' />
	</div>`,
        selector: 'cool-app'
    })
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component - Copy.js.map