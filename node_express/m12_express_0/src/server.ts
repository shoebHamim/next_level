import fs from 'fs';
import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import "dotenv/config";
const app = express();
const port = 3000;
// json parser middleware
app.use(express.json());
// form data middleware
// app.use(express.urlencoded)
const databasePassword = process.env.DB_PASSWORD;
const databaseUsername = process.env.DB_USER_NAME;
const pool = new Pool({
  connectionString: `postgresql://neondb_owner:${databasePassword}@${databaseUsername}.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
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

  //   const tables=await pool.query(`SELECT table_name
  // FROM information_schema.tables
  // WHERE table_schema = 'public';`)
  // console.log(tables);
};
initDB();
// logger middleware

const logger=async(req:Request,res:Response,next:NextFunction)=>{
  const newLog=`${new Date().toISOString()} -> ${req.method} =>${req.path}\n`
  fs.appendFileSync('./log.txt',newLog)
  next()
}

// root routes
app.get("/",logger, (req: Request, res: Response) => {
  res.send("Hello World!!!");
});
// users route
app.post("/users",logger,async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      `
      INSERT INTO users(name,email)
      VALUES($1,$2)
      RETURNING *
      `,
      [name, email]
    );
    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as any).message,
    });
  }
});

app.get("/users",logger, async (req: Request, res: Response) => {
  try {
    const users = await pool.query(`
      SELECT * FROM users
      `);

    res.status(200).json({
      success: true,
      data: users.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
});

app.get("/users/:id",logger, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const users = await pool.query(
      `
      SELECT * FROM users where id=$1
      `,
      [id]
    );

    res.status(200).json({
      success: true,
      data: users.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
});

app.put("/users/:id",logger, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await pool.query(
      `
      UPDATE users SET name=$1, email=$2
      WHERE id=$3
      RETURNING *
   `,
      [name, email, id]
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
});

app.delete("/users/:id",logger, async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`DELETE from users WHERE id=$1`, [id]);
    if (result.rowCount) {
      res.status(200).json({
        success: true,
        message: "User Deleted Successfully!",
      });
    }
    res.status(404).json({
      success: false,
      message: "User Not Found!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
});

app.use(logger,(req,res)=>{
  res.status(404).json({
    success:false,
    message:'Route not found!'
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
