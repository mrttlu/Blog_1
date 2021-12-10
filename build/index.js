"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const openapi_json_1 = __importDefault(require("./openapi.json"));
const middlewares_1 = __importDefault(require("./components/general/middlewares/middlewares"));
const routes_1 = __importDefault(require("./components/posts/routes"));
const routes_2 = __importDefault(require("./components/ping/routes"));
const routes_3 = __importDefault(require("./components/users/routes"));
const controller_1 = require("./components/users/controller");
const isLoggedIn_1 = __importDefault(require("./components/general/middlewares/isLoggedIn"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(middlewares_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapi_json_1.default));
// Register ping routes
app.use('/ping', routes_2.default);
// Register posts routes
app.use('/posts', isLoggedIn_1.default, routes_1.default);
// Register users routes
app.use('/users', routes_3.default);
app.post('/login', controller_1.login);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
//# sourceMappingURL=index.js.map