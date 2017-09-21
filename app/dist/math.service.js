"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathService {
    constructor() {
        console.log("inside MathService constructor()");
    }
    sum(valOne, valTwo) {
        console.log("inside MathService sum()");
        return valOne + valTwo;
    }
    diff(valOne, valTwo) {
        console.log("inside MathService diff()");
        return valOne - valTwo;
    }
    multiply(valOne, valTwo) {
        console.log("inside MathService multiply()");
        return valOne * valTwo;
    }
    divide(valOne, valTwo) {
        console.log("inside MathService divide()");
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
exports.MathService = MathService;
//# sourceMappingURL=math.service.js.map