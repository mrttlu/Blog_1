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
const database_1 = __importDefault(require("../../database"));
const postsService = {
    getAllPosts: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [posts] = yield database_1.default.query(`
      SELECT P.id, P.title, P.content, P.dateCreated, P.dateUpdated, U.email
        FROM posts P
        INNER JOIN users U on P.usersId = U.id
        WHERE P.dateDeleted IS NULL;`);
            return posts;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }),
    getPostById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [posts] = yield database_1.default.query(`
      SELECT P.id, P.title, P.content, P.dateCreated, P.dateUpdated, U.email
        FROM posts P
        INNER JOIN users U on P.usersId = U.id
        WHERE P.id = ? AND P.dateDeleted IS NULL;
      `, [id]);
            return posts[0];
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }),
    createPost: (newPost) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [result] = yield database_1.default.query('INSERT INTO posts SET ?;', [newPost]);
            return result.insertId;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }),
};
exports.default = postsService;
//# sourceMappingURL=service.js.map