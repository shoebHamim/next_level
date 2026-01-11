import express from "express";
import { userRoutes } from "./modules/user/user.routes";
import initDB from "./config/db";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();
app.use(express.json());
initDB();

// ROUTES
// route -> controller -> service
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);

app.use("/auth", authRoutes);

export default app;
