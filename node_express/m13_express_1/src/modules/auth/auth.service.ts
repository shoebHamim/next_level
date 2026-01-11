import { pool } from "../../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";
const loginUser = async (email: string, password: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  if (result.rows.length === 0) {
    return null;
  }
  const fetchedUser = result.rows[0];
  const match = await bcrypt.compare(password, fetchedUser.password);
  if (!match) {
    return null;
  }
  const secret:unknown=config.jwt_secret;
  if(typeof secret!='string'){
    return null
  }
  const token = jwt.sign(
    { name: fetchedUser.name, email: fetchedUser.email,role:fetchedUser.role }, secret,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

export const authServices = {
  loginUser,
};
