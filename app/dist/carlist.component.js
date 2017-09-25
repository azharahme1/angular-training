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
const http_1 = require("@angular/http");
let CarListComponent = class CarListComponent {
    constructor(http) {
        this.http = http;
        this.title = 'Capita India Private Ltd';
    }
    /*ngOnInit(){

      var self = this;
      var obs:Observable<Response> = this.http.get('cars.json');
      obs.subscribe(function(res:Response){
          self.cars = res.json();
          console.log("All cars loaded from server.......");
       });

    }*/
    loadCars() {
        this.http.get('cars.json')
            .subscribe((res) => {
            this.cars = res.json();
            console.log("All cars loaded from server.......");
        });
        /*this.http.get('cars.json').subscribe((res:Response) => {
            this.cars = res.json();
            console.log("All cars loaded from server.......");
        });*/
        /*var obs:Observable<Response> = this.http.get('cars.json');
        obs.subscribe((res:Response) => {
            this.cars = res.json();
            console.log("All cars loaded from server.......");
        });*/
        /*obs.subscribe(function(res:Response){
            self.cars = res.json();
            console.log("All cars loaded from server.......");
         });*/
    }
};
CarListComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: `<h1> {{title}} </h1>
  			 <button (click)='loadCars();'>Load Cars</button>
         <div class='carlist'>
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let car of cars">
        <td>{{car.make}} {{car.name}}</td>
        <td>{{car.price}}</td>
        <td>{{car.color}}</td>
      </tr>
    </tbody>
    </table>
  </div>`,
        styles: [`
	`]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], CarListComponent);
exports.CarListComponent = CarListComponent;
//# sourceMappingURL=carlist.component.js.map