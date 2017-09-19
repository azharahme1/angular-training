"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let CalComponent = class CalComponent {
    constructor() {
        this.title = "Simple Math Calculator";
        this.valOne = 10;
        this.valTwo = 10;
        this.result = 20;
    }
    doSum() {
        this.result = this.valOne + this.valTwo;
        //this.result = parseInt(this.valOne) + parseInt(this.valTwo);			
    }
};
CalComponent = __decorate([
    core_1.Component({
        template: `<div>
		<h1>{{title}}</h1>
		Enter Value : <input type=number [(ngModel)]='valOne' /><br/>
		Enter Value : <input type=number [(ngModel)]='valTwo' /><br/>
			      <input (click)='doSum()' type=button value='SUM' /><br/>
		<h1>Result : {{result}}</h1>
	</div>`,
        selector: 'cool-app'
    })
], CalComponent);
exports.CalComponent = CalComponent;
//# sourceMappingURL=cal.component.js.map