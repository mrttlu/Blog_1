"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerMiddleware = (req, res, next) => {
    console.log(`Url: ${req.url}, Method: ${req.method}, Time: ${new Date().toISOString()}`);
    return next();
};
exports.default = loggerMiddleware;
//# sourceMappingURL=middlewares.js.map