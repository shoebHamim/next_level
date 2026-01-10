import { readUsers, writeUsers } from "../helpers/fileDb";
import parseBody from "../helpers/parseBody";
import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, {
    success: true,
    message: "The server is up and running!",
    path: req.url,
  });
});

addRoutes("POST", "/users", async (req, res) => {
  const newUser = await parseBody(req);
  const users = await readUsers();
  users.push(newUser);

  await writeUsers(users);
  sendJson(res, 200, newUser);
});

addRoutes("GET", "/users", async (req, res) => {
  const users = await readUsers();
  sendJson(res, 200, users);
});

addRoutes("GET", "/users", async (req, res) => {
  const users = await readUsers();
  sendJson(res, 200, users);
});

addRoutes('GET','/users/:id',async(req,res)=>{
  // const {id} = req.params;
  const id=req.params?.id
  console.log(id);
  const users=await readUsers()
  const user=users.find((user:{id?:string})=>user?.id==id)
  sendJson(res,200,user)

})
