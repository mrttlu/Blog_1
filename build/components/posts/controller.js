"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const service_1 = __importDefault(require("./service"));
// Get posts controller
const getAllPosts = (req, res) => {
    const { id } = res.locals.user;
    const posts = service_1.default.getAllPosts(id);
    return res.status(200).json({
        posts,
    });
};
exports.getAllPosts = getAllPosts;
// Get post by id controller
const getPostById = (req, res) => {
    const { id } = req.params;
    const post = service_1.default.getPostById(id);
    if (!post) {
        return res.status(400).json({
            messsage: `No post exists with id: ${id}`,
        });
    }
    return res.status(200).json({
        post,
    });
};
exports.getPostById = getPostById;
// Create post controller
const createPost = (req, res) => {
    const { title, content, author } = req.body;
    const newPost = {
        title,
        content,
        author,
    };
    const id = service_1.default.createPost(newPost);
    return res.status(200).json({
        id,
    });
};
exports.createPost = createPost;
//# sourceMappingURL=controller.js.map