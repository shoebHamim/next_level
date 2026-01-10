import express, { Request, Response } from "express";
import { Pool } from "pg";
import 'dotenv/config';
const app = express();
const port = 3000;
// json parser middleware
app.use(express.json());
// form data middleware
// app.use(express.urlencoded)
const databasePassword=process.env.DB_PASSWORD
const databaseUsername=process.env.DB_USER_NAME
const pool = new Pool({
  connectionString:
    `postgresql://neondb_owner:${databasePassword}@${databaseUsername}.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
});


console.log(process.env.DB_PASSWORD);

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT  NULL,
    age INT,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) on DELETE CASCADE,
    title varchar(200) NOT NULL,
    description TEXT,
    is_completed BOOLEAN default false,
    priority INT,
    due_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )`);

  const tables=await pool.query(`SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';`)
console.log(tables);
};
initDB();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

app.post("/", (req: Request, res: Response) => {
  // console.log(req);
  console.log(req.body);
  res.status(201).json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
