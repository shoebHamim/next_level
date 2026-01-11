import { Request, Response, Router } from "express";
import logger from "../../middleware/logger";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";

const router = Router();

router.post("/", logger, userControllers.createUser);
router.get("/:id",logger,(req,res,next)=> userControllers.getUser(req,res,next));
router.get("/", logger, userControllers.getAllUsers);
router.delete("/:id", logger, userControllers.deleteUser);
router.put("/:id", logger, userControllers.updateUser);

export const userRoutes = router;
