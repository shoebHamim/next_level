
import dotenv from 'dotenv'
dotenv.config()
// import 'dotenv/config' // this line does the same thing as line 2,3
// it uses path as path = process.cwd() + '/.env'
// but the first approach gives the option to add the path and some more option


console.log(process.env.SECRET);
export default {
  secret: process.env.SECRET
}


export const value='this is export';
// console.log(config)