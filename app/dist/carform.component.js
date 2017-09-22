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
const router_1 = require("@angular/router");
const car_1 = require("./car");
const log_service_1 = require("./log.service");
let CarFormComponent = class CarFormComponent {
    constructor(router, activatedRoute, logger, carService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.logger = logger;
        this.carService = carService;
        this.title = 'Car Entry Form';
    }
    ngOnInit() {
        this.editMode = false;
        this.car = new car_1.Car();
        var self = this;
        this.activatedRoute.params.subscribe(function (prms) {
            var vin = parseInt(prms['vin']);
            console.log("VIN " + vin);
            self.car = self.carService.findCar(vin);
            self.editMode = true;
        });
    }
    doAdd() {
        this.logger.info("Inside CarFormComponent doAdd()");
        this.carService.addCar(this.car);
        this.router.navigate(['/carlist']);
    }
    doUpdate() {
        this.logger.info("Inside CarFormComponent doUpdate()");
        this.carService.updateCar(this.car);
        this.router.navigate(['/carlist']);
    }
};
CarFormComponent = __decorate([
    core_1.Component({
        templateUrl: 'partials/carform.component.html',
        styleUrls: ['css/carform.component.css'],
        selector: 'car-form'
    }),
    __param(3, core_1.Inject('ICarService')),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, log_service_1.LogService, Object])
], CarFormComponent);
exports.CarFormComponent = CarFormComponent;
//# sourceMappingURL=carform.component.js.map