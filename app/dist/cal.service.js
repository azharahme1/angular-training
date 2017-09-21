"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CalService {
    constructor() {
        console.log("inside CalService constructor()");
    }
    sum(valOne, valTwo) {
        console.log("inside CalService sum()");
        return valOne + valTwo;
    }
    diff(valOne, valTwo) {
        console.log("inside CalService diff()");
        return valOne - valTwo;
    }
    multiply(valOne, valTwo) {
        console.log("inside CalService multiply()");
        return valOne * valTwo;
    }
    divide(valOne, valTwo) {
        console.log("inside CalService divide()");
        if (valOne <= 0 || valTwo <= 0) {
            //throw new Error('For division, numbers can not be zero or less!!!');
            throw {
                type: 'InvalidValueError',
                message: 'For division, numbers can not be zero or less!!!',
                name: 'InvalidValueError'
            };
        }
        return valOne / valTwo;
    }
}
exports.CalService = CalService;
//# sourceMappingURL=cal.service.js.map