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
        this.name = "Audi Q5";
        this.logo = "images/q5.png";
        this.selectedCar = null;
    }
    showDetail() {
        var car = {
            vin: 100,
            model: 'Q5',
            make: 'Audi',
            price: 129000000.00,
            color: 'red',
            year: 2010,
            logo: 'images/q5.png'
        };
        this.selectedCar = car;
    }
};
CarComponent = __decorate([
    core_1.Component({
        template: `<div class='container'>
		<div class='car'>
			<h1>Car Component</h1>
			<h2>Name : {{name}}</h2>
			<img width=50 height=50 [src]='logo' />
			<input (click)='showDetail()' type=button value='Detail' />
		</div>
		<car-detail [car]='selectedCar'></car-detail>
	</div>`,
        selector: 'cool-app',
        styles: [`

		.car {
			float:left;
			width:40%;
		}

	  	car-detail{	
	   		float:right;
		}
		

	`]
    })
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map