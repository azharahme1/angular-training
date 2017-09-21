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
//A4 imports
const core_1 = require("@angular/core");
const joke_service_1 = require("./joke.service");
let CalComponent = class CalComponent {
    //DI is happeining here on service argument using named provider
    /*constructor(@Inject('simpleCalculator') private calService:ICalService){
        //this.calService = calService;
    }*/
    /*constructor(private jokeService:JokeService,@Inject('simpleCalculator') private calService:ICalService){
    }*/
    constructor(jokeService, calService) {
        this.jokeService = jokeService;
        this.calService = calService;
        this.title = "Simple Math Calculator";
        this.valOne = 10;
        this.valTwo = 0;
        this.result = 10;
        //private calService:ICalService = null;
        this.errorMessage = "";
        this.currentJoke = "";
    }
    ngOnInit() {
        var self = this;
        this.clock = window.setInterval(function () {
            self.currentJoke = self.jokeService.nextJoke();
        }, 2000);
    }
    ngOnDestroy() {
        window.clearInterval(this.clock);
    }
    doSum() {
        this.result = this.calService.sum(this.valOne, this.valTwo);
    }
    doDiff() {
        this.result = this.calService.diff(this.valOne, this.valTwo);
    }
    doMultiply() {
        this.result = this.calService.multiply(this.valOne, this.valTwo);
    }
    doDivide() {
        try {
            this.result = this.calService.divide(this.valOne, this.valTwo);
        }
        catch (ex) {
            console.log(ex);
            this.errorMessage = ex.message;
        }
    }
};
CalComponent = __decorate([
    core_1.Component({
        templateUrl: 'partials/cal.component.html',
        selector: 'cool-app',
        styleUrls: ['css/themes/cal.component.a11y.css']
    }),
    __param(1, core_1.Inject('calculator')),
    __metadata("design:paramtypes", [joke_service_1.JokeService, Object])
], CalComponent);
exports.CalComponent = CalComponent;
//# sourceMappingURL=cal.component.js.map