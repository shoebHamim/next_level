import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const config = {
  connection_str: process.env.CONNECTION_STR,
  port: process.env.PORT,
  hash_round:process.env.HASH_ROUND,
  jwt_secret:process.env.JWT_SECRET
};

export default config;
