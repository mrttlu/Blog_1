"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("./config"));
const pool = mysql2_1.default.createPool({
    host: config_1.default.db.host,
    user: config_1.default.db.user,
    password: config_1.default.db.password,
    database: config_1.default.db.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}).promise();
exports.default = pool;
//# sourceMappingURL=database.js.map