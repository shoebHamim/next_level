import  fs  from "fs";
import path from "node:path";

const filePath= path.join(process.cwd(),'/src/data/users.json')

export async function readUsers(){
  const data=fs.readFileSync(filePath,'utf-8')
  return JSON.parse(data)
}

export async function writeUsers(user:any){
  fs.writeFileSync(filePath,JSON.stringify(user,null,2))
}