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
exports.login = exports.getUsers = exports.createUser = void 0;
const hashService_1 = __importDefault(require("../general/services/hashService"));
const jwtService_1 = __importDefault(require("../general/services/jwtService"));
const service_1 = __importDefault(require("./service"));
// Create user controller
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const newUser = {
        email,
        password,
    };
    const id = yield service_1.default.createUser(newUser);
    return res.status(200).json({
        id,
    });
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield service_1.default.getUsers();
    return res.status(200).json({
        users,
    });
});
exports.getUsers = getUsers;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = service_1.default.getUserByEmail(email);
    if (!user) {
        return res.status(404).json({
            error: 'User not found',
        });
    }
    const match = yield hashService_1.default.compare(password, user.password);
    if (!match) {
        return res.status(401).json({
            error: 'Check password',
        });
    }
    const token = yield jwtService_1.default.sign(user);
    return res.status(200).json({
        token,
    });
});
exports.login = login;
//# sourceMappingURL=controller.js.map