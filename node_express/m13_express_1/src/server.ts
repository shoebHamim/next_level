import express from "express";
import config from "./config";
import { userRoutes } from "./modules/user/user.routes";
import initDB from "./config/db";

const app = express();
app.use(express.json());
// initDB()
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// route -> controller -> service
app.use('/users',userRoutes)




const { port: serverPort } = config;
app.listen(serverPort, (ser) => {
  console.log(`Example app listening on port ${serverPort}`);
});
