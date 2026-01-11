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
exports.userServices = void 0;
const db_1 = require("../../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../../config"));
const createUser = (name, email, password, role) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcryptjs_1.default.hash(password, Number(config_1.default.hash_round));
    const result = yield db_1.pool.query(`
        INSERT INTO users(name,email,password,role)
        VALUES($1,$2,$3,$4)
        RETURNING *
        `, [name, email, hashedPassword, role]);
    return result;
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.pool.query(`
      SELECT * FROM users where id=$1
      `, [id]);
    return result;
});
const updateUser = (name, email, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.pool.query(`
      UPDATE users SET name=$1, email=$2
      WHERE id=$3
      RETURNING *
   `, [name, email, id]);
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.pool.query(`DELETE from users WHERE id=$1`, [id]);
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.pool.query(`
      SELECT * FROM users
      `);
    return result;
});
exports.userServices = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
};
