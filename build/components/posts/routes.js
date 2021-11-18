"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const middleware_1 = require("./middleware");
const router = express_1.default.Router();
router
    .get('/', controller_1.getAllPosts)
    .get('/:id', controller_1.getPostById)
    .post('/', middleware_1.createPostValidator, middleware_1.titleToUppercase, controller_1.createPost);
exports.default = router;
//# sourceMappingURL=routes.js.map