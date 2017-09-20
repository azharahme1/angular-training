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
let PersonComponent = class PersonComponent {
    constructor() {
        this.name = "Pintu";
        this.age = 25;
        this.logo = "images/person1.jpg";
        this.size = { w: 200, h: 150 };
        console.log("Inside PersonComponent constructor!!!");
    }
    changeImage() {
        this.logo = "images/person2.jpg";
        console.log("Image changed!!!!");
    }
    doDance() {
        this.logo = "images/person1.jpg";
        console.log("Perosn dancing.......!!!!");
    }
};
PersonComponent = __decorate([
    core_1.Component({
        template: `<div class='person'>
		<h1>Person Details</h1>
		<h2>Name : {{name}}</h2>
		<h2>Age : {{age}}</h2>
		<img [width]='size.w' [height]='size.h' [src]='logo' /><br/>
		<input (click)="changeImage()" type=button value='Change' />
		<input (mouseover)="doDance()" type=button value='Dance' />
	</div>`,
        selector: 'person-detail',
        styles: [`

		.person{
			width:100%;
			text-align:center;
			border:20px inset blue;
		}

		.person h1 {
			background-color:rgb(0,100,255);
			color:white;
			width:60%;
			margin:auto;
			text-align:center;
			margin-top:5px;
			margin-bottom:5px;
		}	

	`]
    }),
    __metadata("design:paramtypes", [])
], PersonComponent);
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map