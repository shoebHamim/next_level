import { Request, Response, Router } from "express";
import logger from "../../middleware/logger";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router();
// middleware function type
//! (req: Request, res: Response, next: NextFunction) => void | Promise<void>
// if a function call is used instead of passing the middleware function 
// that function is called immediately when the route is called
router.post("/", logger, userControllers.createUser);
router.get("/:id",logger,(req,res,next)=> userControllers.getUser(req,res,next));
router.get("/", logger,auth("admin"), userControllers.getAllUsers);
router.delete("/:id", logger, userControllers.deleteUser);
router.put("/:id", logger, userControllers.updateUser);

export const userRoutes = router;
