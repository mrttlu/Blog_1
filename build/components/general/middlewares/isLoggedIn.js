"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwtService_1 = __importDefault(require("../services/jwtService"));
const isLoggedIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeaders = req.headers.authorization;
    const token = authHeaders === null || authHeaders === void 0 ? void 0 : authHeaders.split(' ')[1];
    if (token) {
        const payload = yield jwtService_1.default.verify(token);
        if (!payload) {
            return res.status(401).json({
                error: 'Token is not valid',
            });
        }
        res.locals.user = payload;
        return next();
    }
    return res.status(401).json({
        error: 'No token provided',
    });
});
exports.default = isLoggedIn;
//# sourceMappingURL=isLoggedIn.js.map