"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./modules/user/user.routes");
const db_1 = __importDefault(require("./config/db"));
const auth_routes_1 = require("./modules/auth/auth.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.default)();
// ROUTES
// route -> controller -> service
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/users", user_routes_1.userRoutes);
app.use("/auth", auth_routes_1.authRoutes);
exports.default = app;
