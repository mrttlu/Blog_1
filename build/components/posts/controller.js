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
exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const service_1 = __importDefault(require("./service"));
// Get posts controller
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { id } = res.locals.user;
    const posts = yield service_1.default.getAllPosts();
    return res.status(200).json({
        posts,
    });
});
exports.getAllPosts = getAllPosts;
// Get post by id controller
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield service_1.default.getPostById(id);
    if (!post) {
        return res.status(400).json({
            messsage: `No post exists with id: ${id}`,
        });
    }
    return res.status(200).json({
        post,
    });
});
exports.getPostById = getPostById;
// Create post controller
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usersId = res.locals.user.id;
    const { title, content } = req.body;
    const newPost = {
        title,
        content,
        usersId,
    };
    const id = yield service_1.default.createPost(newPost);
    return res.status(200).json({
        id,
    });
});
exports.createPost = createPost;
//# sourceMappingURL=controller.js.map