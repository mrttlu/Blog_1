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
const hashService_1 = __importDefault(require("../general/services/hashService"));
const database_1 = __importDefault(require("../../database"));
const usersService = {
    createUser: (newUser) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const hashedPassword = yield hashService_1.default.hash(newUser.password);
            const user = Object.assign(Object.assign({}, newUser), { password: hashedPassword });
            const [result] = yield database_1.default.query('INSERT INTO users SET ?;', [user]);
            return result.insertId;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }),
    getUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        const [users] = yield database_1.default.query('SELECT id, email, dateCreated, dateUpdated FROM users WHERE dateDeleted IS NULL;');
        return users;
    }),
    getUserByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [users] = yield database_1.default.query('SELECT * FROM users WHERE email = ? AND dateDeleted IS NULL', [email]);
            return users[0];
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }),
};
exports.default = usersService;
//# sourceMappingURL=service.js.map