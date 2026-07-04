import express, { Application } from "express";
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app: Application = express();
app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json());
app.get("/", (req, res) => {
  console.log("url hit");
  res.send("Prisma and better auth module server is up and running!");
});

app.use("/posts", postRouter);

export default app;
