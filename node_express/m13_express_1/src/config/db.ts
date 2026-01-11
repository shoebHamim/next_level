import {Pool} from 'pg';
import config from './index'

export const pool=new Pool({
  connectionString: config.connection_str
})

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT  NULL,
    password TEXT NOT NULL,
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
};

export default initDB;