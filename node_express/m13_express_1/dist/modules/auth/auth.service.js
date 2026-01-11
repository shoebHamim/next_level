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
exports.authServices = void 0;
const db_1 = require("../../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.pool.query(`SELECT * FROM users WHERE email=$1`, [
        email,
    ]);
    if (result.rows.length === 0) {
        return null;
    }
    const fetchedUser = result.rows[0];
    const match = yield bcryptjs_1.default.compare(password, fetchedUser.password);
    if (!match) {
        return null;
    }
    const secret = config_1.default.jwt_secret;
    if (typeof secret != 'string') {
        return null;
    }
    const token = jsonwebtoken_1.default.sign({ name: fetchedUser.name, email: fetchedUser.email, role: fetchedUser.role }, secret, {
        expiresIn: "1d",
    });
    return token;
});
exports.authServices = {
    loginUser,
};
