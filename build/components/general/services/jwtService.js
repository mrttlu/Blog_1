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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const jwtService = {
    sign: (user) => __awaiter(void 0, void 0, void 0, function* () {
        const payload = {
            id: user.id,
        };
        const token = yield jsonwebtoken_1.default.sign(payload, config_1.default.jwtSecret, { expiresIn: '1h' });
        return token;
    }),
    verify: (token) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const payload = yield jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
            return payload;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }),
};
exports.default = jwtService;
//# sourceMappingURL=jwtService.js.map