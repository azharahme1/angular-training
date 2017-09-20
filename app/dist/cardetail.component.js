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
let CarDetailComponent = class CarDetailComponent {
    constructor() {
        this.title = "Car Details";
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CarDetailComponent.prototype, "car", void 0);
CarDetailComponent = __decorate([
    core_1.Component({
        template: `<div *ngIf="car">
		<h1>{{title}}</h1>
		<h2>Vin : {{car.vin}}</h2>
		<h2>Name : {{car.make}} {{car.model}}</h2>
		<h2>Price : {{car.price}}</h2>
		<h2>Color : {{car.color}}</h2>
		<h2>Year : {{car.year}}</h2>
		<img [src]='car.logo' />
	</div>`,
        selector: 'car-detail'
    })
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=cardetail.component.js.map