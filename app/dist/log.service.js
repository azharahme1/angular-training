"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogService {
    info(message) {
        var date = new Date();
        var formattedDate = date.toString().substring(0, 24);
        console.log(`INFO - ${formattedDate} - ${message} !!!!`);
    }
}
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map