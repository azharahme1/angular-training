"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
class CarService {
    constructor() {
        this.cars = [
            new car_1.Car(1000, 'X1', 'BMW', 2400000, 'Black', 'x1.png'),
            new car_1.Car(1001, 'X3', 'BMW', 5400000, 'Black', 'x3.png'),
            new car_1.Car(1002, 'A1', 'Audi', 6700000, 'Red', 'a1.png'),
            new car_1.Car(1003, 'Q5', 'Audi', 9900000, 'Black', 'q5.png'),
            new car_1.Car(1004, 'XE', 'Jaquar', 78900000, 'Yellow', 'xe.png'),
            new car_1.Car(1005, 'CD1', 'Mers', 189000, 'Black', 'xe.png'),
            new car_1.Car(1006, 'A5', 'Audi', 900000, 'White', 'a5.png')
        ];
    }
    readAll() {
        return this.cars;
    }
    addCar(car) {
        car.vin = this.cars.length + 1000;
        this.cars.push(car);
    }
    findCar(vin) {
        for (var idx = 0; idx < this.cars.length; idx++) {
            var car = this.cars[idx];
            if (car.vin === vin) {
                return car;
            }
        }
    }
    deleteCar(vin) {
        for (var idx = 0; idx < this.cars.length; idx++) {
            var car = this.cars[idx];
            if (car.vin === vin) {
                this.cars.splice(idx, 1);
                break;
            }
        }
    }
    updateCar(updatedCar) {
        for (var idx = 0; idx < this.cars.length; idx++) {
            var car = this.cars[idx];
            if (car.vin === updatedCar.vin) {
                this.cars[idx] = updatedCar;
                break;
            }
        }
    }
}
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map