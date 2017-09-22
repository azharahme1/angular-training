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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const car_1 = require("./car");
const log_service_1 = require("./log.service");
let CarFormComponent = class CarFormComponent {
    constructor(logger, carService) {
        this.logger = logger;
        this.carService = carService;
        this.title = 'Car Entry Form';
        this.carUpdated = new core_1.EventEmitter();
        this.carAdded = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.editMode = false;
        this.car = new car_1.Car();
    }
    doAdd() {
        this.logger.info("Inside CarFormComponent doAdd()");
        this.carAdded.emit({ car: JSON.parse(JSON.stringify(this.car)) });
    }
    doUpdate() {
        this.logger.info("Inside CarFormComponent doUpdate()");
        this.carUpdated.emit({ updatedCar: JSON.parse(JSON.stringify(this.car)), time: new Date() });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CarFormComponent.prototype, "editMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", car_1.Car)
], CarFormComponent.prototype, "car", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CarFormComponent.prototype, "carUpdated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CarFormComponent.prototype, "carAdded", void 0);
CarFormComponent = __decorate([
    core_1.Component({
        templateUrl: 'partials/carform.component.html',
        styleUrls: ['css/carform.component.css'],
        selector: 'car-form'
    }),
    __param(1, core_1.Inject('ICarService')),
    __metadata("design:paramtypes", [log_service_1.LogService, Object])
], CarFormComponent);
exports.CarFormComponent = CarFormComponent;
//# sourceMappingURL=carform.component.js.map