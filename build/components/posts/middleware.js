"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleToUppercase = exports.createPostValidator = void 0;
const createPostValidator = (req, res, next) => {
    const { title, content, author } = req.body;
    if (!title) {
        return res.status(400).json({
            messsage: 'No post title provided!',
        });
    }
    if (!content) {
        return res.status(400).json({
            messsage: 'No post content provided!',
        });
    }
    if (!author) {
        return res.status(400).json({
            messsage: 'No post author provided!',
        });
    }
    return next();
};
exports.createPostValidator = createPostValidator;
const titleToUppercase = (req, res, next) => {
    const { title } = req.body;
    const uppercaseTitle = title.toUpperCase();
    req.body.title = uppercaseTitle;
    return next();
};
exports.titleToUppercase = titleToUppercase;
//# sourceMappingURL=middleware.js.map