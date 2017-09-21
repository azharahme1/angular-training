"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataService {
    constructor() {
        this.jokes = [
            'Training will finish at 9 P.M.',
            'Fridays are very boring.',
            'Mondays are amazing.',
            'Tusedays are always welcome.'
        ];
    }
    readAll() {
        console.log("Inside DataService readAll()!!!");
        return this.jokes;
    }
    addJoke(newJoke) {
        this.jokes.push(newJoke);
    }
}
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map