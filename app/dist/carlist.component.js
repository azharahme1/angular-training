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
const properties_1 = require("./properties");
const log_service_1 = require("./log.service");
let CarListComponent = class CarListComponent {
    constructor(logger, carService) {
        this.logger = logger;
        this.carService = carService;
        this.title = "Cool Automobile App";
        this.imagePath = properties_1.imageUrl;
        this.editImage = properties_1.editIcon;
        this.deleteImage = properties_1.deleteIcon;
    }
    ngOnInit() {
        this.cars = this.carService.readAll();
    }
    ngOnDestroy() {
    }
    doDelete(vin) {
        this.carService.deleteCar(vin);
        this.logger.info(`Car with ${vin} deleted!!!!`);
    }
};
CarListComponent = __decorate([
    core_1.Component({
        templateUrl: 'partials/carlist.component.html',
        selector: 'automobile',
        styleUrls: ['css/carlist.component.css']
    }),
    __param(1, core_1.Inject('ICarService')),
    __metadata("design:paramtypes", [log_service_1.LogService, Object])
], CarListComponent);
exports.CarListComponent = CarListComponent;
//# sourceMappingURL=carlist.component.js.map