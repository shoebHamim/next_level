import { pool } from "../../config/db";
import bcrypt from "bcryptjs";
import config from "../../config";

const createUser = async (name: string, email: string, password: string,role:string) => {
  const hashedPassword = await bcrypt.hash(password, Number(config.hash_round));
  const result = await pool.query(
    `
        INSERT INTO users(name,email,password,role)
        VALUES($1,$2,$3,$4)
        RETURNING *
        `,
    [name, email, hashedPassword,role]
  );
  return result;
};

const getUser = async (id: string) => {
  const result = await pool.query(
    `
      SELECT * FROM users where id=$1
      `,
    [id]
  );
  return result;
};

const updateUser = async (name: string, email: string, id: string) => {
  const result = await pool.query(
    `
      UPDATE users SET name=$1, email=$2
      WHERE id=$3
      RETURNING *
   `,
    [name, email, id]
  );
  return result;
};

const deleteUser = async (id: string) => {
  return await pool.query(`DELETE from users WHERE id=$1`, [id]);
};

const getAllUsers = async () => {
  const result = await pool.query(`
      SELECT * FROM users
      `);
  return result;
};

export const userServices = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
