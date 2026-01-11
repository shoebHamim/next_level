"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const logger_1 = __importDefault(require("../../middleware/logger"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
// middleware function type
//! (req: Request, res: Response, next: NextFunction) => void | Promise<void>
// if a function call is used instead of passing the middleware function 
// that function is called immediately when the route is called
router.post("/", logger_1.default, user_controller_1.userControllers.createUser);
router.get("/:id", logger_1.default, (req, res, next) => user_controller_1.userControllers.getUser(req, res, next));
router.get("/", logger_1.default, (0, auth_1.default)("admin"), user_controller_1.userControllers.getAllUsers);
router.delete("/:id", logger_1.default, user_controller_1.userControllers.deleteUser);
router.put("/:id", logger_1.default, user_controller_1.userControllers.updateUser);
exports.userRoutes = router;
