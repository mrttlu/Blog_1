"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const db_1 = __importDefault(require("../../db"));
const postsService = {
    getAllPosts: () => {
        const { posts } = db_1.default;
        return posts;
    },
    getPostById: (id) => {
        const post = db_1.default.posts.find((element) => element.id === id);
        return post;
    },
    createPost: (newPost) => {
        const { title, content, author } = newPost;
        const id = (0, nanoid_1.nanoid)();
        const post = {
            id,
            title,
            content,
            author,
        };
        db_1.default.posts.push(post);
        return id;
    },
};
exports.default = postsService;
//# sourceMappingURL=service.js.map